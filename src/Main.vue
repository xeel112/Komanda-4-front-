<template>
  <div class="Main">
    <div class="container">
      <app-header :user="user"/>
      <main>
        <router-view @logged="userInit($event)"/>
      </main>
    </div>
      <app-footer :user="user"/>
  </div>
</template>

<script>
import Header from './comps/Header.vue'
import Footer from './comps/Footer.vue'

export default {
  data () {
    return {
      user: {
        user_id: -1,
        logged: false,
      }
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
  methods: {
    userInit(e) {
      this.user.user_id = e.user_id;
      this.user.login = e.login;
      this.user.photo = e.photo;
      this.user.bonuses_count = e.bonuses;
      this.user.prod_number = e.basket;
      this.user.logged = true;
    }
  },
  created() {
    this.$router.replace({name: 'Home', params: {user: this.user}});
  },
}
</script>

<style lang="scss">
* {
  font-family: 'Raleway';
  outline:0 none !important;
  label {
    cursor: pointer;
  }
  -moz-user-select: none;
  -o-user-select:none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container {
  margin-top: 25px !important;
}

.pointer {
  cursor: pointer;
}

/**/
.home-product-tape {
  font-size: 0;
  overflow-x: scroll;
  white-space: nowrap;
}

.home-product {
  width: 200px;
  display: inline-block;
  position: relative;
}
</style>
