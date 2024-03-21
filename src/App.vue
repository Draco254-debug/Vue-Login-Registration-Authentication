<template>
  <Navigationbar />
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigationbar from './components/Navigationbar.vue';
export default {
  name: 'App',
  components: {
    Navigationbar,
  }
}
</script>

