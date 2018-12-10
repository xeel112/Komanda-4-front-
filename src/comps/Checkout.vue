<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link to="/Home">Главная</router-link></li>
          <li><router-link to="/Basket">Корзина</router-link></li>
          <li><router-link to="/Checkout">Оформление заказа</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-10 offset-1 col-md-6 offset-md-0 col-xl-5 offset-xl-1">
        <div class="row no-gutters">
          <h3>Оформление заказа</h3>
          <div class="col-12 my-3">
            <label for="ch_lname">
              <h5>Имя<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_lname" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_fname">
              <h5>Фамилия<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_fname" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_phone">
              <h5>Мобильный телефон<span style="color: red">*</span></h5>
            </label>
            <br>
            <div style="display: inline-block;font-family: 'Proxima Nova Rg'">+7</div>
            <div style="display: inline-block;"><input style="font-family: 'Proxima Nova Rg'" type="text" id="ch_phone" class="lg-inp"></div>
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_country">
              <h5>Страна<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_country" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_city">
              <h5>Город<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_city" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mb-3">
            <label for="ch_addres">
              <h5>Адрес<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="ch_addres" class="lg-inp">
            <span style="color: red"></span>
          </div>
          <div class="col-12 mt-3">
            <button id="checkout-btn">Оплатить</button>
          </div>
        </div>
    </div>
    <div class="d-none d-md-block offset-md-1 col-md-5 col-xl-4">
      <div class="row no-gutters">
        <div class="col-12 mb-3" style="font-family: 'Proxima Nova Rg'"><h3>Количество товаров - 3</h3></div>
        <div class="col-12 ch-basket mb-3">
          <app-basket-product/>
          <app-basket-product/>
          <app-basket-product/>
        </div>
        <div class="col-6">
          <h5 style="font-family: 'Proxima Nova Rg'">Всего к оплате</h5>
        </div>
        <div class="col-6" style="text-align: right;">
          <h5 style="font-family: 'Proxima Nova Rg'">6666,00 руб.</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaskProduct from './Basket-product'

export default {
  data () {
    return {
      
    }
  },
  components: {
    'app-basket-product': BaskProduct,
  },
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';

/* div {
  border: 1px red solid;
} */
.ch-basket {
  height: 300px;
  overflow-y: scroll;
}
label {
  font-size: 14px;
}
h5, label {
  margin-bottom: 0;
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

.separator {
  background: url('img/separator.png');
  background-size: contain;
  background-repeat: repeat-y;
}

.reg-block ul {
  list-style-type: disc;
  padding-left: 25px;
}

.lg-inp {
  width: 100%;
  border: 1px $dark solid;
  background-color: $inpbg;
}

label {
  font-size: 20px;
}

#to-reg-btn {
  width: 100%;
  height: 48px;
  background: $dark;
  border: none;
  color: white;
  font-size: 2em;
  &:hover {
    background: $light;
    color: $dark;
  }
}

#checkout-btn {
  height: 48px;
  width: 100%;
  background: $dark;
  border: none;
  color: white;
  font-size: 2em;
  &:hover {
    background: $light;
    color: $dark;
  }
}

@media (max-width: 576px) {
  #to-reg-btn {
    height: 60px;
  }
}

/**/
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
