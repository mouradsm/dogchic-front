<template>
  </div>
  <navbar></navbar>
  <sidebar></sidebar>
  <div class="container">
      <router-view> </router-view>
  </div>
</template>

<script>
  import navbar from './components/navbar/navbar.vue'
  import sidebar from './components/sidebar/sidebar.vue'

  export default {
    components: {
      navbar,
      sidebar
    }
  }

</script>