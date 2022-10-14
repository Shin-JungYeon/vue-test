<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/about">About</router-link>
      </b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item>
          <router-link to="/user">List</router-link>
        </b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>

</style>