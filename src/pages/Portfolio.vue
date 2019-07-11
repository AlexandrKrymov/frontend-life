<template>
  <div v-if="projects" class="page-content portfolio-page">
    <div class="container">
      <div class="portfolio-page__head">
        <h1>{{ $store.getters.getH1('portfolio', $i18n.locale) }}</h1>
        <div class="portfolio-categories">
          <router-link :to="'/portfolio' | prefixUrl" exact active-class="is-active">
            {{$t('btns.all')}}
            <span>{{ this.$store.getters.getPortfolioItems.length }}</span>
          </router-link>
          <router-link
            v-for="(item, index) in cats"
            :to="'/portfolio/' + item.slug | prefixUrl"
            exact
            active-class="is-active"
            :key="index"
          >
            {{item['name_' + $i18n.locale]}}
            <span>{{ item.count }}</span>
          </router-link>
        </div>
        <div class="slider-nav">
          <button class="slider-nav__prev" @click="changeSlide('prev')"></button>
          <button class="slider-nav__next" @click="changeSlide('next')"></button>
        </div>
      </div>
    </div>
    <div class="portfolio-page__body">
      <div class="container">
        <carousel class="portfolio-slider" ref="carousel" v-bind="options">
          <div v-for="(item, index) in projects" :key="index" class="portfolio-item">
            <router-link
              :to="'/portfolio/item/' + item.slug | prefixUrl"
              exact
              class="portfolio-item__image"
            >
              <img
                :src="item.thumbnail"
                :alt="item['title_' + $i18n.locale]"
                :title="item['title_' + $i18n.locale]"
              >
              <div v-if="item.tags" class="portfolio-item__tags">
                <span v-for="(item, index) in item.tags" :key="index">{{ item }}</span>
              </div>
            </router-link>
            <router-link
              :to="'/portfolio/item/' + item.slug | prefixUrl"
              exact
              class="portfolio-item__title"
            >{{ item['title_' + $i18n.locale] }}</router-link>
            <p class="portfolio-item__description">{{ item['description_' + $i18n.locale] }}</p>
          </div>
          <div></div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/carousel";

export default {
  name: "Portfolio",
  metaInfo: {
    title: "Портфолио"
  },
  components: {
    Carousel
  },
  props: ['cat'],
  data() {
    return {
      options: {
        items: 4,
        margin: 60,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          900: {
            items: 3
          },
          1300: {
            items: 4
          }
        }
      }
    };
  },
  computed: {
    projects() {
      if (this.$route.params.cat) {
        let projects = this.$store.getters.getPortfolioItems;

        if (!projects) return undefined;

        return projects.filter(value => {
          let cats = value.cats;
          for (let i = 0; i < cats.length; i++) {
            if (cats[i].slug === this.cat) return true;
          }
          return false;
        });
      } else {
        return this.$store.getters.getPortfolioItems;
      }
    },
    cats() {
      return this.$store.getters.getPortfolioCats;
    }
  },
  methods: {
    changeSlide(vector) {
      if (vector === "next") {
        this.$refs.carousel.nextSlide();
      } else if (vector === "prev") {
        this.$refs.carousel.prevSlide();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-page {
  display: flex;
  flex-direction: column;
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__body {
    background-color: rgba(16, 16, 22, 0.8);
    padding: 60px 0;
    overflow: hidden;
    margin: 35px 0 0;
    flex: auto;
  }
}
h1 {
  text-transform: none;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
}
.portfolio-categories {
  margin-right: 140px;
  margin-left: auto;
  a {
    position: relative;
    text-decoration: none;
    font-size: 16px;
    color: #ffffff;
    border-bottom: 1px dotted #fff;
    margin-right: 40px;
    &:last-of-type {
      margin-right: 0;
    }
    &.is-active,
    &:hover {
      border-bottom-color: transparent;
      color: #00d2ff;
    }
    span {
      position: absolute;
      top: -5px;
      left: calc(100% + 5px);
      font-size: 9px;
      color: rgba(#fff, 0.4);
      vertical-align: super;
    }
  }
}
.portfolio-slider {
  margin-right: -10%;
}
.portfolio-item {
  &__image {
    display: block;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    img {
      display: block;
      transition: 0.3s;
    }
    &:hover {
      img {
        opacity: 0.8;
      }
    }
  }
  &__tags {
    position: absolute;
    left: 25px;
    top: 20px;
    span {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      background-color: rgba(#fff, 0.7);
      font-size: 13px;
      font-weight: 400;
      color: #000000;
      line-height: 30px;
      min-width: 80px;
      text-align: center;
      border-radius: 15px;
      margin-bottom: 7px;
      padding: 0 10px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  &__title {
    display: inline-block;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
    margin: 35px 0 0;
    transition: 0.3s;
    &:hover {
      color: #00d2ff;
    }
  }
  &__description {
    font-weight: 400;
    font-size: 15px;
    color: #868787;
    margin: 10px 0 0;
  }
}
</style>
