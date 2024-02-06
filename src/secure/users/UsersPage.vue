<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div class="btn-toolbar mb-2 mb-nd-0" v-if="user.canEdit('users')">
            <router-link to="/users/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="userData in users" :key="userData.id">
              <td>{{ userData.id }}</td>
              <td>{{ userData.first_name }} {{ userData.last_name }}</td>
              <td>{{ userData.email }}</td>
              <td>{{ userData.role.name }}</td>
              <td>
                <div class="btn-group mr-2" v-if="user.canEdit('users')">
                    <router-link :to="`/users/${user.id}/edit`" class="btn btn-sn btn-outline-secondary">Edit</router-link>
                    <a href="javascript:void(0)" class="btn btn-sn btn-outline-secondary" @click="del(user.id)">Delete</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    </div>

    <the-paginator :last-page="lastPage" @page-changed="load($event)"></the-paginator>
</template>

<script lang="ts">
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';
import {Entity} from "../../interfaces/entity";
import ThePaginator from "../../components/ThePaginator.vue";
import {useStore} from 'vuex';

export default {
    name: "UsersPage",
    components: {
        ThePaginator
    },
    setup() {
        const users = ref([]);
        const lastPage = ref(0);
        const store = useStore();

        const user = computed(() => store.state.User.user);

        const load = async (page = 1) => {
            const response = await axios.get(`users?page=${page}`);

            users.value = response.data.data;
            lastPage.value = response.data.meta.last_page;
        }

        const del = async (id: number) => {
            if (confirm("Are you sure you want to delete this record?")) {
                await axios.delete(`users/${id}`);

                users.value = users.value.filter((user: Entity) => user.id !== id);
            }
        }

        onMounted(load);

        return {
            user,
            users,
            del,
            lastPage,
            load
        }
    }
}
</script>

<style scoped>

</style>