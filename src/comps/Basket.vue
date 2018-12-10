<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link to="/Home">Главная</router-link></li>
          <li><router-link to="/Basket">Корзина</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-12 col-md-7 col-xl-6 offset-xl-1">
      <div class="row no-gutters">
        <div class="col-12 mt-3 mb-3">
          <h3>Моя корзина</h3>
        </div>
        <app-basket-product/>
        <app-basket-product/>
        <app-basket-product/>
      </div>
    </div>
    <div class="col-12 col-md-5 col-xl-4 mt-md-3 total">
      <div class="row no-gutters">
        <div class="col-12"><h3>Итого</h3></div>
        <div class="col-6 mb-2 t">Всего</div>
        <div class="col-6 p" style="font-size: 1.35rem">123 руб.</div>
        <div class="col-12 my-3">
          <input type="checkbox" id="use_bon" name="use_bon">
          <label for="use_bon">Использовать бонусы</label>
          <router-link to="/Bonuses">
            <img style="margin-left: 5px" src="img/help.png" alt="">
          </router-link>
        </div>
        <div class="col-6 mb-2 t" style="color: grey; font-size: .85rem">С учетом бонусов</div>
        <div class="col-6 p" style="color: grey;font-size: 1.35rem">123 руб.</div>
        <div class="col-6 mb-4 t">Бонусов получите</div>
        <div class="col-6 p" style="font-size: 1.35rem">50 б.</div>
        <div class="col-12"><button id="pay" @click="$router.push({name: 'Checkout', params: {user_id: user_data.user_id}})">Оплатить</button></div>
        
      </div>
    </div>
  </div>
</template>

<script>
import BaskProduct from './Basket-product'

export default {
  data () {
    return {
      /*тут с помощью запроса получать все нужные данные*/
      user_data: {},
    }
  },
  created() {
    if (this.$route.params.user_data.logged)
    {
      this.user_data = this.$route.params.user_data;
      /*после этого выполнять запрос*/
    }
    else
      this.$router.push("/Login");
  },
  components: {
    'app-basket-product': BaskProduct,
  },
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';
.p {
  text-align: right;
}
.total * {
  font-family: 'Proxima Nova Rg'
}
.total button {
  font-family: 'Raleway'
}

nav {
ul{
  text-align:left;
  margin-bottom: 0px;
  padding: 0px;
}
ul > li{
  display: inline-block;
  vertical-align: bottom;
}
ul > li a{
  display: block;
  padding: 0 10px;
  font-size: 20px;
  text-decoration: none;
  position: relative;
}
a, a:hover, a:active, a:visited {
  color: $greytext;
}
a:hover, a:active {
text-decoration: underline;

};
a:active {
  background: $light;
}

ul > li a:before{
  content: '/';
  position: absolute; top: 25%; left: 0;
  height: 16px;
  margin-top: -6px;
  margin-left: -4px; 
}
ul > li:first-child a:before{
  content: '';
}
}

#pay {
  width: 100%;
  height: 50px;
  font-size: 32px;
  background: $dark;
  border: none;
  color: white;
}
#pay:hover {
  background: $light;
  color: $dark;
}
#pay:active {
  padding: 0 !important;
  border: 6px $dark solid;
}

input[type=checkbox] {
  opacity: 0;
  float:left;
}

input[type=checkbox] + label {
  margin: 0 0 0 20px;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  float: left;
}

input[type=checkbox] + label ~ label {
  margin: 0 0 0 40px;
}

input[type=checkbox] + label::before {
  content: ' ';
  position: absolute;
  left: -35px;
  top: -3px;
  width: 25px;
  height: 25px;
  display: block;
  background: white;
  border: 1px solid #A9A9A9;
}

input[type=checkbox] + label::after {
  content: ' ';
  position: absolute;
  left: -35px;
  top: -3px;
  width: 23px;
  height: 23px;
  display: block;
  z-index: 1;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE4MS4yIDI3MyAxNyAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAxODEuMiAyNzMgMTcgMTYiPjxwYXRoIGQ9Ik0tMzA2LjMgNTEuMmwtMTEzLTExM2MtOC42LTguNi0yNC04LjYtMzQuMyAwbC01MDYuOSA1MDYuOS0yMTIuNC0yMTIuNGMtOC42LTguNi0yNC04LjYtMzQuMyAwbC0xMTMgMTEzYy04LjYgOC42LTguNiAyNCAwIDM0LjNsMjMxLjIgMjMxLjIgMTEzIDExM2M4LjYgOC42IDI0IDguNiAzNC4zIDBsMTEzLTExMyA1MjQtNTI0YzctMTAuMyA3LTI1LjctMS42LTM2eiIvPjxwYXRoIGZpbGw9IiMzNzM3MzciIGQ9Ik0xOTcuNiAyNzcuMmwtMS42LTEuNmMtLjEtLjEtLjMtLjEtLjUgMGwtNy40IDcuNC0zLjEtMy4xYy0uMS0uMS0uMy0uMS0uNSAwbC0xLjYgMS42Yy0uMS4xLS4xLjMgMCAuNWwzLjMgMy4zIDEuNiAxLjZjLjEuMS4zLjEuNSAwbDEuNi0xLjYgNy42LTcuNmMuMy0uMS4zLS4zLjEtLjV6Ii8+PHBhdGggZD0iTTExODcuMSAxNDMuN2wtNTYuNS01Ni41Yy01LjEtNS4xLTEyLTUuMS0xNy4xIDBsLTI1My41IDI1My41LTEwNi4yLTEwNi4yYy01LjEtNS4xLTEyLTUuMS0xNy4xIDBsLTU2LjUgNTYuNWMtNS4xIDUuMS01LjEgMTIgMCAxNy4xbDExNC43IDExNC43IDU2LjUgNTYuNWM1LjEgNS4xIDEyIDUuMSAxNy4xIDBsNTYuNS01Ni41IDI2Mi0yNjJjNS4yLTMuNCA1LjItMTIgLjEtMTcuMXpNMTYzNC4xIDE2OS40bC0zNy43LTM3LjdjLTMuNC0zLjQtOC42LTMuNC0xMiAwbC0xNjkuNSAxNjkuNS03MC4yLTcxLjljLTMuNC0zLjQtOC42LTMuNC0xMiAwbC0zNy43IDM3LjdjLTMuNCAzLjQtMy40IDguNiAwIDEybDc3LjEgNzcuMSAzNy43IDM3LjdjMy40IDMuNCA4LjYgMy40IDEyIDBsMzcuNy0zNy43IDE3NC43LTE3Ni40YzEuNi0xLjcgMS42LTYuOS0uMS0xMC4zeiIvPjwvc3ZnPg==') no-repeat center center;
  -ms-transition: all .2s ease;
  -webkit-transition: all .2s ease;
  transition: all .3s ease;
  -ms-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);
  opacity: 0;
}

input[type=checkbox]:checked + label::after {
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
</style>
