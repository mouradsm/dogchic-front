<template>
<!-- <ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
<nav>
  <div class="nav-wrapper blue darken-2">
    <a href="#!" class="brand-logo"> DogChic</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      Dropdown Trigger
      <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
  <div class="container">
    <router-view> </router-view>
  </div> -->
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