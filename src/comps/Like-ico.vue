<template>
  <div class="col-auto pt-1 like-btn">
    <div class="menu-img" id="like-ico"></div>
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
$light: #fce5a1;
$dark: #373536;

.like-btn {
  padding: 0;
}

*{
  cursor: pointer;
#like-ico {
  width: 30px;
  height: 25px;
  /* background: url('img/like.png'); */
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    /* background: url('img/like_hv.png'); */
    background-repeat: no-repeat;
    background-position: center;
  };
  &:active {
    /* background: url('img/like_cl.png'); */
    background-repeat: no-repeat;
    background-position: center;
  };
}
}

/* #like-ico:hover {
    background: url('img/like_hv.png');
  }; */
</style>
