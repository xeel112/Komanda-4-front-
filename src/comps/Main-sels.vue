<template>
  <div id="sels" class="mb-4">
    <div class="row mb-2">
      <div class="col-12">
        <h3>Подборки</h3>
      </div>
    </div>
    <div class="d-none d-md-flex row">
      <div class="col-4">
        <app-home-sel/>
      </div>
      <div class="col-4">
        <app-home-sel/>
      </div>
      <div class="col-4">
        <app-home-sel/>
      </div>
    </div>
    <div class="d-flex d-md-none row no-gutters" style="overflow-x: hidden;">
      <div class="col-12 home-product-tape">
        <div class="home-product">
          <app-home-sel/>
        </div>
        <div class="home-product">
          <app-home-sel/>
        </div>
        <div class="home-product">
          <app-home-sel/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeProduct from './Home-product.vue'
  import Sel from './Home-sel.vue'
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
  components: {
    'app-home-sel': Sel,
  },
  props: [
    'user'
  ]
}
</script>

<style lang="scss" scoped>
$light: #fce5a1;
$dark: #373536;
.slider-view {
  overflow-x: hidden;
}

.h-list-btn {
  width: 160px;
  height: 30px;
  background: $dark;
  border: none;
  color: white;
  &:active {
    background: $light;
    color: $dark;
  }
}

#slider-tape {
  width: 400%;
}
</style>
