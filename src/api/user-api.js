import {instance} from "@/api/index";

function listUser() {
    return instance.get("/users");
}

function getUser(id) {
    return instance.get(`/users/${id}`);
}

export {
    listUser,
    getUser
}