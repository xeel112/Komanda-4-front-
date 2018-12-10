<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link to="/Home">Главная</router-link></li>
          <li><router-link to="/Registry">Регистрация</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-10 offset-1 col-md-6 offset-md-3">
        <div class="row no-gutters">
          <h3>Регистрация</h3>
          <div class="col-12 my-3">
            <label for="rg-name">
              <h5>Имя<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="rg-name" class="lg-inp" v-model="name">
            <span style="color: red; font-size: 1.25rem">{{name_err}}</span>
          </div>
          <div class="col-12 mb-3">
            <label for="rg-email">
              <h5>Email<span style="color: red">*</span></h5>
            </label>
            <input type="text" id="rg-email" class="lg-inp" v-model="email">
            <span style="color: red; font-size: 1.25rem">{{email_err}}</span>
          </div>
          <div class="col-12">
            <label for="rg-pass">
              <h5>Пароль<span style="color: red">*</span></h5>
            </label>
            <input type="password" id="rg-pass" class="lg-inp" v-model="password">
            <span style="color: #aaa">Пароль должен содержать не менее 6 символов</span>
            <br>
            <span style="color: red; font-size: 1.25rem">{{pass_err}}</span>
          </div>
          <div class="col-10 mt-3 pt-2">
            <div class="row no-gutters">
              <div class="col-12">
                <input type="checkbox" id="agr-ch" v-model="confrm">
                <label for="agr-ch" style="width: 100%">Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности. Узнать больше</label>
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button id="reg-btn" @click="registrat()">Регистрация</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { API } from './../api-common.js'

export default {

  data () {
    return {
      name: '',
      email: '',
      password: '',

      confrm: false,

      status: 1, //1- все ок, 2-некорректный email, 3-некорректный пароль, 4-некорр. имя

      user: {},
    }
  },
  methods: {
    registrat() {
      alert('тут будет запрос на регистрацию');
      
      if (this.confrm == true)
      {
      API.get('url_is_here')
      .then(response => response.data)
      .then(response => {
      this.status = response.status;
        if (response.status == 1)
        {
          this.user.user_id = response.user_id;  // id, который возвращает сервер
          this.user.login = response.login; // логин, который возвращает сервер
          this.user.basket = response.basket; // количество товаров в корзине, которое возвращает сервер
          this.user.photo = response.photo; // url на фото, который возвращает сервер
          this.user.bonuses = response.bonuses; // количество бонусов, которое возвращает сервер
          this.$emit('logged', this.user);
          this.$router.push({name: 'Home', params: Object.assign({logged: true},this.user)});
        }
      })
      .catch(e => console.log(e))
    }
    else
      alert('Вы должны ознакомиться с политикой конфиденциальности');
  }
  },
  computed: {
    name_err() {
      if (this.status == 4)
        return 'Имя имеет неверный формат';
      else
        return '';
    },
    email_err() {
      if (this.status == 2)
        return 'Email имеет неверный формат';
      else
        return '';
    },
    pass_err() {
      if (this.status == 3)
        return 'Пароль имеет неверный формат';
      else
        return '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';

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

#reg-btn {
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
