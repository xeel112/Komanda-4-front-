<template>
  <div id="app-footer">
    <footer>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-7 col-xl-6 offset-xl-1">
            <div class="row no-gutters align-items-center">
              <div class="col-12 col-md-2">
                <router-link to="/About"><a href="#" class="ftr-lnk">О нас</a></router-link>
              </div>
              <div class="col-12 col-md-5">
                <router-link to="/Assessment"><a href="#" class="ftr-lnk">Оценка состояния</a></router-link>
              </div>
              <div class="col-12 col-md-5">
                <router-link to="/Bonuses"><a href="#" class="ftr-lnk">Бонусная программа</a></router-link>
              </div>
            </div>
          </div>
          <div class="col-5 col-md-2">
            <div class="row no-gutters align-items-center">
              <div class="col footer-logo">
                <router-link :to="{name: 'Home', params: {user: user}}"><img src="img/footer_logo.png" alt=""></router-link>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3 col-xl-2">
            <div class="row no-gutters align-items-center ftr-phn">
              <div class="col" style="font-family: 'Proxima Nova Rg'; font-size: 1.25rem">8-931-228-13-37</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
/*  name: 'app',*/ //из-за этого spoped почему-то сбрасывал стиль

  data () {
    return {
      
    }
  },
  props: [
    'user'
  ]
}
</script>

<style lang="scss" scoped>
$light: #fce5a1;
$grey: #c2c5c4;
$dark: #373536;

*, a {
  color: $grey;
}

.container, .row {
  height: 100%
}

footer {
  background: $dark;
  height: 136px;
}
.footer-logo {
  border-left: 1px #d1d5c3 solid;
}
.footer-phone {
  text-align: right;
}

@media (min-width: 768px) {
  .ftr-phn {
    text-align: right;
  }
}

@media (max-width: 768px) {
  .ftr-phn {
    text-align: left;
  }
}
</style>
