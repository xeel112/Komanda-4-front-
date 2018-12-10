<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link to="/Home">Главная</router-link></li>
          <li><router-link to="/Login">Авторизация</router-link></li>
        </ul>
    </nav>
    </div>
    <div class="col-10 offset-1 col-md-5 offset-md-0 offset-xl-1">
        <div class="row no-gutters">
          <h3>Авторизация</h3>
          <div class="col-12 my-3">
            <label for="lg-email">
              <h5>Email<span style="color: red">*</span></h5>
            </label>
            <input type="text" name="email" id="lg-email" class="lg-inp" v-model="login">
            <span style="color: red;"></span>
          </div>
          <div class="col-12 mb-2 mb-md-0">
            <label for="lg-pass">
              <h5>Пароль<span style="color: red">*</span></h5>
            </label>
            <input type="password" name="passwd" id="lg-pass" class="lg-inp" v-model="password">
            <span style="color: red"></span>
          </div>
          <div class="col-6 mt-3 pt-2">
            <input type="checkbox" name="remember" id="rem-ch">
            <label for="rem-ch">Запомнить меня</label>
          </div>
          <div class="col-6 mt-3">
            <button id="lg-btn" @click="log_in()">Войти</button>
          </div>
        </div>
    </div>
    <div class="d-none d-md-block col-md-1 separator"></div>
    <div class="col-10 offset-1 mt-4 col-md-6 mt-md-0 col-xl-5 offset-md-0 reg-block">
    <h4>Регистрация нового пользователя</h4>
    <ul>
      <li>Используйте введенные ранее данные</li>
      <li>Накапливайте и тратьте бонусы</li>
      <li>Отслеживайте стоимость товара</li>
      <li>Сохраняйте историю заказов</li>
    </ul>
    <div class="row no-gutters">
      <div class="col-12 col-lg-10">
        <router-link to="/Registry">
          <button id="to-reg-btn">Регистрация</button>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import {API} from './../api-common.js'

export default {


  data () {
    return {
      login: '',
      password: '',
      status: 1,
      remember: false,

      user: {},
    }
  },
  mounted() { /*типо успешно вошли*/
    this.$emit('logged', {user_id: 123, bonuses: 1251, basket: 20, photo: '', login: 'Abrabra'});

    /*this.$router.push({name: 'Home', params: {user_id: 123, bonuses: 1251, basket: 20, photo: '', login: 'Abrabra'}});*///caution
  },
  computed: {
    msg() {
      if (this.status == 0)
      {
        return 'Неверный пароль';
      }
      else return '';
    }
  },
  methods: {
    log_in() { //вход и получение id пользователя
      API.get('url_is_here')
      .then(response => response.data)
      .then(response => {
        if (this.status == 1)
          this.user.user_id = response.user_id;

        this.status = response.status;
      })
      .catch(e => {console.log(e)})

      if (this.status == 1)
      {
        API.get('url_is_here')
        .then(response => response.data)
        .then(response => {
          this.user.login = response.login; // логин, который возвращает сервер
          this.user.basket = response.basket; // количество товаров в корзине, которое возвращает сервер
          this.user.photo = response.photo; // url на фото, который возвращает сервер
          this.user.bonuses = response.bonuses; // количество бонусов, которое возвращает сервер
          this.$emit('logged', this.user);
          this.$router.push({name: 'Home', params: Object.assign({logged: true},this.user)});
        })
        .catch(e => {console.log(e)})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$light: #fce5a1;
$dark: #373536;
$greytext: #b5b7ac;
$inpbg: #f4f8fa;

/* div {
  border: 1px red solid;
} */
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
  /* background: url('img/separator.png'); */
  background-size: contain;
  background-repeat: repeat-y;
}

.reg-block ul {
  list-style-type: disc;
  padding-left: 25px;
  li {
    margin-bottom: 12px;
    font-size: 16px;
  }
}

.lg-inp {
  width: 100%;
  border: 1px $dark solid;
  background-color: $inpbg;
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

#lg-btn {
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
