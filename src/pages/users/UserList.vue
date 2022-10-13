<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(idx, user) in userList" v-bind:key="idx">
        <td>{{ idx }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {listUser} from "@/api/user-api";

export default {
  name: "UserList",
  data() {
    return {
      userList: [],
      loading: true,
    }
  },
  mounted() {
    this.listUser();
  },
  methods: {
    listUser() {
      listUser()
          .then((response) => {
            console.log(response.data());

            this.loading = true;
            this.userList = response.data();
          })
          .catch((error) => {
            console.error(error);
          })
    }
  }
}
</script>

<style scoped>

</style>