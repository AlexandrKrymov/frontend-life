<template>
  <div id="app" class="app">
    <app-header/>
    <transition name="slide-fade" appear>
      <router-view :key="$route.path"></router-view>
    </transition>
    <transition name="load">
      <loader v-show="$store.getters.getLoadingStatus"/>
    </transition>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import appHeader from "./components/Header.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "app",
  components: {
    Home,
    appHeader,
    Loader
  },
  data() {
    return {
      isReady: false
    };
  },
  created() {
    this.$store.dispatch("getPortfolioCats");
    this.$store.dispatch("getPortfolioItems")
    this.$store.dispatch("getReviews");
  }
};
</script>

<style lang="scss">
.app {
  position: relative;
  width: 100%;
  height: 100vh;
  // overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  // background: radial-gradient(circle at 70% 50%, transparent 325px, rgba(#42b1b0,0.3) 326px, transparent 327px, transparent 497px, rgba(#42b1b0,0.3) 498px, transparent 499px),url('assets/images/main-background.jpg') no-repeat center center;
  background: url("assets/images/main-background__old.jpg") no-repeat center
    center;
  background-size: cover;
  overflow: hidden;
}

.page-content {
  flex: auto;
  min-height: calc(100vh - 128px);
  padding-top: 50px;
  overflow: auto;
  & + & {
    min-height: 0;
  }
}

.slide-fade-enter-active {
  transition: all 0.6s 0.6s;
}
.slide-fade-enter {
  opacity: 0;
  // transform: translateY(-30px);
  transform: scale(1.2);
  visibility: hidden;
}
.slide-fade-enter-to {
  opacity: 1;
  // transform: translateY(0px);
  transform: scale(1);
  visibility: visible;
}
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-leave {
  // transform: translateY(0px);
  transform: scale(1);
  visibility: visible;
  opacity: 1;
}
.slide-fade-leave-to {
  // transform: translateY(30px);
  transform: scale(1.2);
  visibility: hidden;
  opacity: 0;
}

.load-enter-active,
.load-leave-active {
  transition: all 0.3s;
}
.load-enter,
.load-leave {
  opacity: 0;
}
.load-enter-to,
.load-leave-to {
  opacity: 1;
}
</style>
