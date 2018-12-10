<template>
  <div id="bestsellers"  class="mb-4">
    <div class="row mb-2">
      <div class="col-4">
        <h3>Бестселлеры</h3>
      </div>
      <div class="col-8 pr-3" style="text-align: right;">
        <router-link to="/Catalog" class="show-all">Смотреть все</router-link>
      </div>
    </div>
    <div class="d-none d-md-flex row">
          <div class="col-3">
            <app-home-product :user="user" :plate_id="345"/>
          </div>
          <div class="col-3">
            <app-home-product :user="user" :plate_id="345"/>
          </div>
          <div class="col-3">
            <app-home-product :user="user" :plate_id="345"/>
          </div>
          <div class="col-3">
            <app-home-product :user="user" :plate_id="345"/>
          </div>
        </div>
        <div class="d-flex d-md-none row no-gutters" style="overflow-x: hidden;">
          <div class="col-12 home-product-tape">
            <div class="home-product">
              <app-home-product :user="user" :plate_id="345"/>
            </div>
            <div class="home-product">
              <app-home-product :user="user" :plate_id="345"/>
            </div>
            <div class="home-product">
              <app-home-product :user="user" :plate_id="345"/>
            </div>
            <div class="home-product">
              <app-home-product :user="user" :plate_id="345"/>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import HomeProduct from './Home-product.vue'
import {API} from './../api-common.js'

export default {
  /*name: 'app',*/

  data () {
    return {
      plates: []
    }
  },
  created() {
    /*запрос на получение массива id новинок*/
    API.get('url_is_here')
    .then(response => response.data)
    .then(response => {
      this.plates = response;
    })
    .catch(e => {console.log(e)})
  },
  props: [
    'user'
  ],
  components: {
    'app-home-product': HomeProduct
  }
}
</script>

<style lang="scss" scoped>
$light: #fce5a1;
$dark: #373536;
.slider-view {
  overflow-x: hidden;
}

.show-all {
  font-size: 1.35rem;
  text-decoration: underline;
  color: $dark;
}

#slider-tape {
  width: 400%;
}
</style>
