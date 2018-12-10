<template>
  <div class="row no-gutters">
    <div class="col-12 col-md-10 offset-md-1 py-3 nav-mn">
      <div class="row no-gutters justify-content-between">
        <div class="col-auto">
          <nav>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Каталог</a></li>
            </ul>
          </nav>
        </div>
        <div class="col-auto pt-1 d-md-none" style="font-size: 1.15rem; text-decoration: underline;" @click="show_sm_filter = !show_sm_filter">Фильтры</div>
      </div>

  </div>
  <div class="w-100"></div>
  <div class="col-12">
    <div class="row no-gutters">
      <div :class="{'d-none': !show_sm_filter}" class="col-6 col-md-3 d-md-block pr-3" style="font-size: 1.15rem">
        <!-- Блоки меню -->
        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_j = !show_j">
            <div class="row no-gutters">
              <div class="col-10">Жанр</div>
              <div class="col-2"><img :src="show_j ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_j">
            <div class="row no-gutters">
              <div class="col-12"><input id="1.1" type="checkbox"><label for="1.1">Rock'n'Roll</label></div>
              <div class="col-12 mt-2"><input id="1.2" type="checkbox"><label for="1.2">Blues</label></div>
              <div class="col-12 mt-2"><input id="1.3" type="checkbox"><label for="1.3">Classic</label></div>
              <div class="col-12 mt-2"><input id="1.4" type="checkbox"><label for="1.4">Disco</label></div>
            </div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_c = !show_c">
            <div class="row no-gutters">
              <div class="col-10">Страна</div>
              <div class="col-2"><img :src="show_c ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_c"><div class="row no-gutters">
            <div class="col-12"><input id="2.1" type="checkbox"><label for="2.1">Канада</label></div>
            <div class="col-12 mt-2"><input id="2.2" type="checkbox"><label for="2.2">Англия</label></div>
            <div class="col-12 mt-2"><input id="2.3" type="checkbox"><label for="2.3">США</label></div>
            <div class="col-12 mt-2"><input id="2.4" type="checkbox"><label for="2.4">Франция</label></div></div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_v_y = !show_v_y">
            <div class="row no-gutters">
              <div class="col-10">Год выпуска</div>
              <div class="col-2"><img :src="show_v_y ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_v_y"><div class="row no-gutters">
            <div class="row no-gutters">
              <div class="col-2">с</div>
              <div class="col-auto mr-2"><input type="number" min="1900" max="2030" value="2000"></div>
              <div class="col-2">г.</div>
              <div class="w-100"></div>
              <div class="col-2">до</div>
              <div class="col-auto mr-2"><input type="number" min="1900" max="2030" value="2000"></div>
              <div class="col-2">г.</div>
            </div></div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_i_y = !show_i_y">
            <div class="row no-gutters">
              <div class="col-10">Год издания</div>
              <div class="col-2"><img :src="show_i_y ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_i_y"><div class="row no-gutters">
            <div class="row no-gutters">
              <div class="col-2">с</div>
              <div class="col-auto mr-2"><input type="number" min="1900" max="2030" value="2000"></div>
              <div class="col-2">г.</div>
              <div class="w-100"></div>
              <div class="col-2">до</div>
              <div class="col-auto mr-2"><input type="number" min="1900" max="2030" value="2000"></div>
              <div class="col-2">г.</div>
            </div></div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_b = !show_b">
            <div class="row no-gutters">
              <div class="col-10">Группа</div>
              <div class="col-2"><img :src="show_b ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_b"><div class="row no-gutters">
            <div class="col-12"><input id="5.1" type="checkbox"><label for="5.1">A&M Record</label></div>
            <div class="col-12 mt-2"><input id="5.2" type="checkbox"><label for="5.2">Atlantic</label></div>
            <div class="col-12 mt-2"><input id="5.3" type="checkbox"><label for="5.3">Brain</label></div>
            <div class="col-12 mt-2"><input id="5.4" type="checkbox"><label for="5.4">Capitol</label></div></div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_s = !show_s">
            <div class="row no-gutters">
              <div class="col-10">Состояние</div>
              <div class="col-2"><img :src="show_s ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_s"><div class="row no-gutters">
            <div class="col-12"><input id="6.1" type="checkbox"><label for="6.1">Still Sealed</label></div>
            <div class="col-12 mt-2"><input id="6.2" type="checkbox"><label for="6.2">Mint</label></div>
            <div class="col-12 mt-2"><input id="6.3" type="checkbox"><label for="6.3">Near Mint</label></div>
            <div class="col-12 mt-2"><input id="6.4" type="checkbox"><label for="6.4">Excellent</label></div>
            <div class="col-12 mt-2"><input id="6.5" type="checkbox"><label for="6.5">Very Good</label></div>
            <div class="col-12 mt-2"><input id="6.6" type="checkbox"><label for="6.6">Good</label></div></div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="row no-gutters">
          <div class="col-12">
            <div class="row no-gutters justify-content-end">
              <div class="col-auto"><select name="" style="border: none; font-size: 1.05rem" id="sort">
                <option value="1">По популярности</option>
                <option value="2">По названию</option>
                <option value="3">По цене</option>
                <option value="4">По дате</option>
              </select></div>
            </div>  
          </div>

          <div class="col-12 mt-5">
            <div class="row no-gutters">
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
          <div class="row no-gutters justify-content-end">
            <div class="col-12 col-sm-6 col-md-4">
              <div class="row no-gutters">
                <div class="col-1 pointer">
                  <img style="width: 100%" src="img/prev_page.png" @click="current_page > 1 ? refresh(current_page - 1) : {}" alt="">
                </div>
                <div class="col-10" style="text-align: center; font-size: 1.25rem">
                  <span class="pointer" v-if="pagination.first_page.show" @click="refresh(1)">1</span>
                  <span v-if="pagination.left_points.show">...</span>
                  
                  <span v-for="n in 5" class="pointer" :class="{'bold':current_page==pagination.center[n*2-1]}" style="margin: 3px;" v-if="pagination.center[(n-1)*2]" @click="refresh(pagination.center[n*2-1])">{{pagination.center[n*2-1]}}</span>
                  <span v-if="pagination.right_points.show">...</span>
                  <span class="pointer" v-if="pagination.late_page.show" @click="refresh(number_of_pages)">{{pagination.late_page.number}}</span>
                </div>
                <div class="col-1 pointer">
                  <img style="width: 100%" src="img/next_page.png" @click="current_page < number_of_pages ? refresh(current_page + 1) : {}" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
  import Product from './Home-product.vue';

  export default {
    data () {
      return {
      show_j: false, //показать жанры
      show_c: false, //показать страны
      show_v_y: false, //год выпуска
      show_i_y: false, //год издания
      show_b: false, //показать группы
      show_s: false, //показать состояния
      show_sm_filter: false, //показать фильтр при малом экране

      current_page: 1,
      number_of_pages: 20,

      pagination: { //для управления отображением пагинации
        first_page: {
          show: false,
          number: 1
        },
        left_points: {
          show: false
        },
        center:
          [false, 1, false, 2, false, 3, false, 4, false, 5],
        right_points: {
          show: false
        },
        late_page: {
          show: false,
          number: 1
        }
      },
      user: {},
      plates_id: []
    }
  },
  components: {
    'app-product': Product,
  },
  methods: {
    refresh(n) {
      this.current_page = n;

      if (this.current_page > 3)
        this.pagination.first_page.show = true;
      else
        this.pagination.first_page.show = false;

      if (this.current_page > 4)
        this.pagination.left_points.show = true;
      else
        this.pagination.left_points.show = false;

      for (let i = this.current_page - 2, c=0; i<=this.current_page + 2; i++, c++)
        if (i > 0 && i <= this.number_of_pages)
        {
          this.pagination.center[2*c] = true;
          this.pagination.center[2*c+1] = i;
        }
        else {
          this.pagination.center[2*c] = false;
        }

      if (this.number_of_pages - this.current_page > 3)
        this.pagination.right_points.show = true;
      else
        this.pagination.right_points.show = false;

      if (this.number_of_pages - this.current_page > 2)
        {
          this.pagination.late_page.show = true;
          this.pagination.late_page.number = this.number_of_pages;
        }
        else {
          this.pagination.late_page.show = false;
        }
    }
  },
  created() {
    this.user = this.$route.params.user;
    this.refresh(1);
  }
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';
.p {
  text-align: right;
}
.pointer {
  cursor: pointer;
  font-family: 'Proxima Nova Rg';
}
.bold {
  font-weight: bold;
}
input[type='number'] {
  font-family: 'Proxima Nova Rg';
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
