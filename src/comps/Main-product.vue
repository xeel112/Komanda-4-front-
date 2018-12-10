<template>
  <div class="app-products">
    <div class="row justify-content-center">
      <div class="col-10">
        <img src="img/box1.png" class="box" alt="">
        <img src="img/disk.png" class="disk" alt="">
      </div>
    </div>
    <div class="cont_menu">
      <div class="row no-gutters align-items-center" style="height: 100%">
        <div class="col-12 c-menu-opt">
          <img src="img/prod_like.png" alt="like">
        </div>
        <div class="col-12 c-menu-opt pt-1">
          <img src="img/prod_more.png" alt="more">
        </div>
      </div>
    </div>
    <div class="row no-gutters justify-content-center">
      <div class="col-10"><a href="#"><strong>Stealin' Home'75</strong></a>
        <br>
        <a href="#" class="uppercase"><u>BABE RUTH</u></a>
        <br>
        <a href="#" style="font-size: .75rem" class="uppercase">CAPITOL RECORD, США</a>
      </div>
      <div class="col-5 offset-1"></div>
      <div class="col-3 pt-1"><h5>1978р.</h5></div>
      <div class="col-2 h-p-buy"></div>
    </div>

  </div>
</template>

<script>
export default {
/*  name: 'app',*/ //из-за этого spoped почему-то сбрасывал стиль

  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/data.scss";
*{
  div {border: 1px red solid;}
.app-products {
  width: 100%;
  overflow: hidden;

  .cont_menu{
    width: 50px;
    height: 100px;
    background: $light075;
    position: absolute;
    top: 0;
    right: -25px;
    z-index: 3;
    .c-menu-opt {
      height: 40px;
    }
    img {
      width: 70%; margin-left: 8px;
    }
    img[alt="like"] {
      margin-top: 5px;
    }
  }
  .disk {
    width: 94%;
    z-index: 1;
    position: relative;
    margin-top: -107%;
  }
  .box {
    position: relative;
    width: 100%;
    z-index: 2;
  }
  .uppercase {
    text-transform: uppercase;
  }
}
a, a:hover, a:active, a.visited {
  color: black;
}
.h-p-buy {
  /* background: url('img/prod-bask.png'); */
}
}
</style>
