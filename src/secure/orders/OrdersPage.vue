<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div class="btn-toolbar mb-2 mb-nd-0">
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" @click="exportFile">Export</a>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ order.first_name }} {{ order.last_name }}</td>
              <td>{{ order.email }}</td>
              <td>{{ order.total }}</td>
              <td>
                <div class="btn-group mr-2">
                    <router-link :to="`/orders/${order.id}`" class="btn btn-sn btn-outline-secondary">View</router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    </div>

    <the-paginator :last-page="lastPage" @page-changed="load($event)"></the-paginator>
</template>

<script>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import ThePaginator from "../../components/ThePaginator.vue";

export default {
    name: 'OrdersPage',
    components: {
        ThePaginator
    },
    setup() {
        const orders = ref([]);
        const lastPage = ref(0);

        const load = async (page = 1) => {
            const response = await axios.get(`orders?page=${page}`);

            orders.value = response.data.data;
            lastPage.value = response.data.meta.last_page;
        }

        const exportFile = async () => {
            const response = await axios.get('export', {responseType: 'blob'});
            const blob = new Blob([response.data], {type: 'text/csv'});
            const downloadUrl = window.URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'orders.csv';
            link.click();
        }

        onMounted(load);

        return {
            orders,
            lastPage,
            load,
            exportFile
        };
    }
}
</script>

<style scoped>
</style>