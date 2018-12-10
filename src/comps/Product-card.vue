<template>
  <div class="row no-gutters">
    <div class="col-10 offset-1 py-3 nav-mn">
      <nav>
        <ul>
          <li><router-link to="/Home">Главная</router-link></li>
          <li><router-link to="/Home">Каталог</router-link></li>
          <li><router-link to="/Card">Slealin' Home'75</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="w-100"></div>
    <div class="col-12 mb-4">
      <div class="row no-gutters">
        <div class="col-12 col-md-6 col-xl-5 offset-xl-1">
          <div class="row-no-gutters">
            <div class="col-12 mb-3"><h4><b>Stealin' Home'75</b></h4></div>
            <div class="col-12 mb-3"><h6 class="uppercase">Babe Ruth</h6></div>
            <div class="col-12">
              <div class="row no-gutters">
                <div class="col-5  h">Жанр</div>
                <div class="col-5 p" style="text-align: right;">Рок-н-ролл</div>
                <div class="col-2 mb-1"></div>
                <div class="col-5 h">Страна</div>
                <div class="col-5 p" style="text-align: right;">США</div>
                <div class="col-2 mb-1"></div>
                <div class="col-5 h">Год издания</div>
                <div class="col-5 p" style="text-align: right;">1888</div>
                <div class="col-2 mb-1"></div>
                <div class="col-5 h">Год выпуска</div>
                <div class="col-5 p" style="text-align: right;">1999</div>
                <div class="col-2 mb-1"></div>
                <div class="col-5 h">Состояние</div>
                <div class="col-5 p" style="text-align: right;">рвыоар</div>
                <div class="col-2"></div>
              </div>
            </div>
            <div class="col-12 mt-5">
              <div class="row no-gutters align-items-center">
                <div class="col-3"><h3>1978р.</h3></div>
                <div class="col-7"><button @click="addToBasket()" id="bask-btn"></button></div>
                <div class="col-2 p-3" style="height: 0%"><img @click="intoFavor()" class="pointer" src="img/like.png" style="max-height: 100%; width: 100%" alt=""></div>
                <div class="col-12" style="text-align: center; font-size: 1.35rem">
                  +123 бонусов<router-link to="/Bonuses">
                    <img src="img/help.png" style="display: inline-block; margin-left: 5px;" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-5 mt-4 mt-md-0">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="img/podborka.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="img/podborka.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="img/podborka.png" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="row no-gutters mt-3">
            <div class="col p-2"><img style="width: 100%" src="img/podborka.png" alt=""></div>
            <div class="col p-2"><img style="width: 100%" src="img/podborka.png" alt=""></div>
            <div class="col p-2"><img style="width: 100%" src="img/podborka.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-12 col-xl-10 offset-xl-1 mb-5">
      <div class="row no-gutters">
        <div class="col-12 mb-2"><h4>Трек-лист</h4></div>
        <div class="col-12">dfhsf dsafhdsfj yuddhsua hd - 3:50</div>
        <div class="col-12">dfhsf dewhdsfj yuddhsua hd - 2:50</div>
        <div class="col-12">dfhsf dsafhdsfj yuddhsua hd - 3:50</div>
        <div class="col-12">dfhsf ertr yuddhsua hd - 3:50</div>
        <div class="col-12">df dsafhdsfj ydddhsua hd - 3:50</div>
        <div class="col-12">dfhsf dsafhdsfj yudddddffsua hd - 6:57</div>
        <div class="col-12">dfhsf dsfd yuddhsua hd - 3:50</div>
        <div class="col-12">dfh afhdsfj yuddhsua hd - 3:50</div>
        <div class="col-12">dfhsf dsafhdsfj yuddhsua hd - 3:50</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaskProduct from './Basket-product'

  export default {
    data () {
      return {
        plate_id: 0,
        user: {},
      }
    },
    methods: {
      intoFavor() {
        if (this.user.logged)
        {
          alert('Запрос на добавление в избранное');
        }
        else
        {
          this.$router.push('/Login');
        }
      },
      addToBasket() {
        if (this.user.logged)
        {
          alert('Запрос на добавление в корзину');
        }
        else
        {
          this.$router.push('/Login');
        }
      }
    },
    created() {
      this.plate_id = this.$route.params.Data.plate_id;
      this.user = this.$route.params.Data.user;
    },
    components: {
      'app-basket-product': BaskProduct,
    },
  }
</script>

<style lang="scss" scoped>
@import './../style/data.scss';
.h {
  color: grey;
}
.p {
  font-size: 1.15rem;
}

/* #bask-btn {
  width: 100%;
  height: 50px;
  border: none;
  background: url('img/bask_btn.png') $dark;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    background: url('img/bask_btn_act.png') $light;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
  };
} */

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

.uppercase {
  text-transform: uppercase;
}
</style>
