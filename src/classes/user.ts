import { Entity } from "@/interfaces/entity";
import { Permission } from "./permission";
import { Role } from "./role";

export class User implements Entity {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: Role;
    permissions: Permission[];

    constructor(id: number = 0, first_name: string = '', last_name: string = '', email: string = '', role: Role = new Role(), permissions: any[] = []) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.role = role;
        this.permissions = permissions;
    }
}