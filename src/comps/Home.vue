<template>
  <div id="Home">
    <app-slider/>
    <div class="row d-flex d-md-none no-gutters mb-3">
      <div class="col-12">
        <router-link to="/Catalog"><button id="cat-btn-sm">Каталог</button></router-link>
      </div>
    </div>
    <!-- Карточка товара здесь на время -->
    <app-novelty :user="user"/>
    <app-sels :user="user"/>
    <app-bests :user="user"/>
    <app-preord :user="user"/>
  </div>
</template>

<script>
import Slider from './Slider.vue'
import Novelty from './Novelty.vue'
import Bests from './Bestsellers.vue'
import Preord from './Preorders.vue'
import Sels from './Main-sels.vue'

export default {
  data () {
    return {
      user: {}
    }
  },
  components: {
    'app-slider': Slider,
    'app-novelty': Novelty,
    'app-bests': Bests,
    'app-preord': Preord,
    'app-sels': Sels,
  },
  mounted() {
    /*this.$router.push({path: "/Home"});*/
    /*$('body').css('background-color','red');*/
  },
  created() {
    this.user = this.$route.params.user;
  }
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';
* {
  font-family: 'Raleway';
  outline:0 none !important;
  label {
    cursor: pointer;
  }
}

.container {
  margin-top: 25px !important;
}
#cat-btn-sm {
  width: 100%;
  height: 50px;
  font-size: 32px;
  background: $dark;
  border: none;
  color: white;
}
#cat-btn-sm:hover {
  background: $light;
  color: $dark;
}
#cat-btn-sm:active {
  padding: 0 !important;
  border: 6px $dark solid;
}
</style>

<style type="text/css">
  /**/
.home-product-tape {
  font-size: 0;
  overflow-x: scroll;
  white-space: nowrap;
}

.home-product {
  width: 200px;
  display: inline-block;
  position: relative;
}
</style>
