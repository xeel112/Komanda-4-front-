<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link to="/Home">Главная</router-link></li>
          <li><router-link to="/About">О нас</router-link></li>
        </ul>
    </nav>
    </div>
    <div class="col-12 col-md-10 offset-md-1 mb-4" style="font-size: 1.75rem">
      <h4>Интернет-магазин пластинок Vinishop.ru</h4>
    </div>
    <div class="col-12 col-md-10 offset-md-1">
      <p>Интернет-магазин Vinilshop.ru продаёт как старые, так и новые виниловые пластинки и доставляет их по всей России.</p>
      <p>Vinilshop.ru  является продолжением отдела виниловых пластинок магазина "Фонотека"<br>
        Мы продаем пластинки через интернет c 2008 года и стараемся делать всё с "избыточным качеством".<br>
     -  каждую неделю получаем пластинки из Европы, Америки и Японии, а также от коллекционеров винила.<br>
     -  специализируемся на старых пластинках высокого качества и следим за тем, чтобы наш ассортимент вызывал интерес<br>
     -  предлагаем только те пластинки, которые есть в наличии<br>
     -  внимательно относимся к оценке каждой пластинки и конверта, а также публикуем на сайте их фотографии<br>
     -  моем все пластинки перед отправкой вам<br>
     -  предлагаем аппаратуру и дополнительные принадлежности для винила.<br>
     -  отправляем пластинки в течение 1 рабочего дня после поступления к нам оплаты <br>
     -  нам нравится продавать дешевле, но больше. </p>
    </div>
  </div>
</template>

<script>
export default {
  /*name: 'app',*/

  data () {
    return {
      
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

.pg-path {
  font-size: 1.35rem;
  text-decoration: underline;
  color: $dark;
}
.pg-path + a {
  margin-left: 32px;
}


#photo-btn {
  height: 30px;
  width: 80%;
  background: $dark;
  border: none;
  color: white;
  font-size: 1rem;
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
