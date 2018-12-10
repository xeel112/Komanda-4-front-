<template>
  <div class="col-auto pt-1 prof-btn">
    <div class="menu-img" id="prof-ico"></div>
    <div id="b-count"><span>{{bonuses}}</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: [
    'bonuses'
  ]
}
</script>

<style lang="scss" scoped>
$light: #fce5a1;
$dark: #373536;

*{
  cursor: pointer;
  .prof-btn {
  padding: 0;
}

#prof-ico {
  width: 30px;
  height: 28px;
  /* background: url('img/profile.png'); */
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    /* background: url('img/profile_hv.png'); */
    background-repeat: no-repeat;
    background-position: center;
  };
  &:active {
    /* background: url('img/profile_cl.png'); */
    background-repeat: no-repeat;
    background-position: center;
  };
}

#b-count {
  width: 60px;
  text-align: center;
  position: absolute;
  top: 25px;
  left: -5px;
}

#b-count span {
  background-color: $light;
}
}
</style>
