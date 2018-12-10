<template>
  <div class="bask-products col-12 mb-3">
    <div class="row no-gutters">
      <div class="col-3">
        <img src="img/box1.png" class="bask-prod-img" alt="">
      </div>
      <div class="col-8">
        <div class="row no-gutters pl-2" style="height: 100%">
          <div class="col-12" style="height: 25%; font-size: 1.35rem; font-family: 'Proxima Nova Rg'">1970,00 руб.</div>
          <div class="col-12 grey" style="height: 25%; font-size: 1.25rem">Stealin' Home'75</div>
          <div class="col-12 grey" style="height: 25%">BABE RUTH</div>
          <div class="col-12" style="height: 25%"><img src="img/prod_like.png" class="bask_prod_like" alt=""></div>
        </div>
      </div>
      <div class="col-1 pr-2">
        <div class="row no-gutters">
          <div class="col-6">
            <img src="img/bask_del.png" class="bask_del" alt="">
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/data.scss";

.bask-prod-img {
  width: 100%;
}

.bask-prod-like {
  height: 100%;
}
.grey {
  color: grey;
}
.bask_del {
  width: 100%;
}
</style>
