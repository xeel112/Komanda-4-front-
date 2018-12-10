<template>
  <div class="col-auto pt-1 bask-btn">
    <div class="menu-img" id="bask-ico"></div>
    <div id="p-count"><span>{{prods}}</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: [
    'prods'
  ]
}
</script>

<style lang="scss" scoped>
$light: #fce5a1;
$dark: #373536;

*{
  cursor: pointer;
.bask-btn {
  padding: 0;
}

#bask-ico {
  width: 30px;
  height: 28px;
  /* background: url('img/basket.png'); */
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    /* background: url('img/basket_hv.png'); */
    background-repeat: no-repeat;
    background-position: center;
  };
  &:active {
    /* background: url('img/basket_cl.png'); */
    background-repeat: no-repeat;
    background-position: center;
  };
}

#p-count {
  width: 60px;
  text-align: center;
  position: absolute;
  top: 25px;
  left: -5px;
}

#p-count span {
  background-color: $light;
}
}
</style>
