<template>
  <div class="page-content home-page">
    <div class="container">
      <div class="home-wrapper">
        <div class="home-left">
          <h1>{{ $store.getters.getH1('home', $i18n.locale) }}</h1>
          <router-link :to="'/callback' | prefixUrl" class="btn">{{ $t('btns.callback') }}</router-link>
        </div>
        <div class="home-right"><img :src="screenshot" :alt="$store.state.pages.home.h1.ru"></div>
      </div>
    </div>
    <div class="skills-block">
      <div class="container">
        <div class="skills-block__inner">
          <div class="skills-block__item">
            <span class="skills-block__title">HTML/CSS</span>
            <p>HTML5, CSS3, SСSS, Pug, BEM</p>
          </div>
          <div class="skills-block__item">
            <span class="skills-block__title">Javascript</span>
            <p>VueJS, Vuex, Latest ECMAScript, Node JS, Babel, Webpack, Gulp, jQuery, ESLint</p>
          </div>
          <div class="skills-block__item">
            <span class="skills-block__title">Other</span>
            <p>PHP, Twig, WordPress, Git, REST API, GraphQL API</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import code from '../assets/images/code.png'

export default {
  name: 'Home',
  data(){
    return {
      screenshot: code,
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
.home-page{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > .container{
    height: calc(100% - 298px);
  }
}
h1{
  text-transform: uppercase;
  max-width: 650px;
  margin: 0 0 40px;
}
.btn{
  min-width: 247px;
}
.home-wrapper{
  display: flex;
  align-items: center;
  height: 100%;
}
.home-left{
  width: 50%;
  padding: 0 50px 0 0;
}
.home-right{
  width: 50%;
  padding: 0 0 0 50px;
  height: 100%;
}
.skills-block{
  background: rgba(16, 16, 22, 0.9);
  padding: 40px 0;
  margin: 75px 0 0;
  &__inner{
    display: flex;
    border: 1px solid #4c4c50;
    border-radius: 8px;
    padding: 25px 0;
    counter-reset: num;
  }
  &__item{
    position: relative;
    width: 33.333%;
    padding: 0 100px;
    border-right: 1px solid #0c4150;
    counter-increment: num;
    &:last-of-type{
      border-right: none;
    }
    &:before{
      content: counter(num);
      position: absolute;
      top: -10px;
      left: 45px;
      border: 1px solid #707073;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      color: #00d2ff;
      font-weight: 700;
    }
    p{
      font-size: 14px;
      color: #868787;
      font-weight: 500;
      line-height: 19px;
      margin: 15px 0 0;
    }
  }
  &__title{
    color: #ffffff;
    font-weight: 600;
    font-size: 22px;
  }
}
</style>
