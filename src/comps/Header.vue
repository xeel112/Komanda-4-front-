<template>
  <div id="app-header">
    <header>
    <div class="row no-gutters">
      <div class="d-none d-md-block col-md-3 col-xl-3 align-self-center offset-xl-1" style="height: 36px;">
        <div class="row no-gutters">
          <div class="col mr-1">
            <input type="text" id="sch-line" :class="{'sch-line-act': SchIsFocused}" v-model="SchText" placeholder="Поиск"
             @focus="SchIsFocused = true" @blur="SchIsFocused = false">
          </div>
          <div class="col-auto">
            <div id="sch-btn">
            <transition name="sch-icon">
              <img src="img/search.png" v-if="!SchIsFocused && SchText === ''">
            </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 col-xl-3 offset-md-1">
        <router-link :to="{name: 'Home', params: {user: user}}"><img id="h-logo" src="img/logo.png" alt=""></router-link>
      </div>
      <!-- При маленьком экране убираешь с хедера данные пользователя и добавляешь бутерброд -->
      <div class="col-6 col-md-3 col-xl-2 align-self-center offset-md-1"  style="height: 46px">
        <div class="row no-gutters justify-content-around">
          <div @click="redirect('Favorities')"><app-like-ico/></div>
          <div @click="redirect('User')"><app-prof-ico :bonuses="user.logged ? user.bonuses_count + ' б' : ''"/></div>
          <div @click="redirect('Basket')"><app-bask-ico :prods="user.logged ? user.prod_number : ''"/></div>
        </div>
      </div>
    </div>
    <!-- <div class="row no-gutters">
      <div class="d-none d-md-block col-md-4 col-xl-3 offset-xl-1">8-931-228-13-37</div>
      <div class="w-100"></div>
    </div> -->
    <div class="row no-gutters mt-3">
      <div class="d-none d-md-block col-md-4 col-xl-3 offset-xl-1">
        <router-link :to="{name: 'Catalog', params: {user: user}}"><button id="cat-btn">Каталог</button></router-link>
      </div>
      <div class="d-none d-md-block col-md-8 col-xl-7">
        <div class="row no-gutters justify-content-end">
          <div class="col-auto pt-3 head-nav">
            <ul>
              <li><router-link to="/About">О нас</router-link></li>
              <li><router-link to="/Assessment">Оценка состояния</router-link></li>
              <li><router-link to="/Bonuses">Бонусная программа</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 d-md-none mt-3">
        <transition name="sch-icon">
          <img src="img/search.png" v-if="!SchIsFocused && SchText === ''" id="sch-btn-sm">
        </transition>
        <input type="text" id="sch-line-sm" @focus="SchIsFocused = true" @blur="SchIsFocused = false"
        :class="{'sch-line-act': SchIsFocused}" v-model="SchText" placeholder="      Поиск">
      </div>
    </div>
  </header>
  </div>
</template>

<script>
import LikeIco from './Like-ico.vue'
import ProfIco from './Prof-ico.vue'
import BaskIco from './Bask-ico.vue'

export default {
  //name: 'app', //из-за этого spoped почему-то сбрасывал стиль
  data () {
    return {
      SchIsAct: false,
      SchText: "",
      SchIsFocused: false,
    }
  },
  methods:{
    redirect(n) {
      this.$router.push({ name: n, params: {user_data: this.user}});
    }
  },
  props: [
    'user'
  ],
  components: {
    'app-like-ico': LikeIco,
    'app-prof-ico': ProfIco,
    'app-bask-ico': BaskIco
  },
}
</script>


<style lang="scss" scoped>
@import './../style/data.scss';

#h-logo {
  width: 100%
}

#cat-btn {
  width: 100%;
  height: 50px;
  font-size: 32px;
  background: $dark;
  border: none;
  color: white;
}
#cat-btn:hover {
  background: $light;
  color: $dark;
}
#cat-btn:active {
  padding: 0 !important;
  border: 6px $dark solid;
}

#sch-line {
  width: 90%;
  color: $dark;
  border: none;
  border-bottom: 1px $dark solid;
  display: inline-block;
}
#sch-btn {
  width: 21px;
  height: 24px;
  display: inline-block;
}
.sch-line-act {
  border-bottom: 4px $dark solid !important;
}
.sch-line, .sch-line-sm {
  transition: border 0.5s;
}

ul{
  text-align: center;
  margin-bottom: 0px;
}
ul > li{
  display: inline-block;
  vertical-align: bottom;
}
ul > li a{
  display: block;
  padding: 0 10px;
  text-decoration: none;
  position: relative;
}
a, a:hover, a:active, a:visited {
  color: $dark;
}
a:hover, a:active {
text-decoration: underline;

};
.head-nav{
a:active {
  background: $light;
}
}


.sch-icon-enter-active {
  animation: sch-to-txt .5s;
}
.sch-icon-leave-active {
  animation: sch-to-txt .5s reverse;
}
@keyframes sch-to-txt {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

ul > li a:before{
  content: '|';
  position: absolute; top: 25%; left: 0;
  height: 16px;
  margin-top: -6px;
  margin-left: -4px; 
}
ul > li:first-child a:before{
  content: '';
}

#sch-line-sm {
  width: 100%;
  color: $dark;
  border: none;
  border-bottom: 1px $dark solid;
}
#sch-btn-sm {
  position: absolute;
  top: 3px;
  left: 3px
}
</style>

<style type="text/css">
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
