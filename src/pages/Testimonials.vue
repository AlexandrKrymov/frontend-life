<template>
  <div v-if="testimonials" class="page-content testimonials-page">
    <div class="container">
      <div class="testimonials-page__head">
        <h1>{{ $store.getters.getH1('testimonials', $i18n.locale) }}</h1>
        <router-link :to="'/testimonials/leave-review' | prefixUrl" class="btn">{{ $t('btns.testimonial') }}</router-link>
        <div class="slider-nav">
          <button class="slider-nav__prev" @click="changeSlide('prev')"></button>
          <button class="slider-nav__next" @click="changeSlide('next')"></button>
        </div>
      </div>
    </div>
    <div class="testimonials-page__body">
      <div class="container">
        <carousel class="testimonials-slider" ref="carousel" v-bind="options">
          <div v-for="(item, index) in testimonials" :key="index" class="testimonial-item">
            <div class="testimonial-item__body">
              <div class="testimonial-item__text">
                <p>{{item['text_' + $i18n.locale]}}</p>
              </div>
              <div class="testimonial-item__body-bottom">
                <div class="testimonial-item__rating">
                  <img
                    src="/dist/assets/images/rating-active.png"
                    :style="{width: 20 * item.rating + '%'}"
                    :alt="'Рейтинг('+item.rating+')'"
                  >
                </div>
                <span class="testimonial-item__date">{{item.date}}</span>
              </div>
            </div>
            <div class="testimonial-item__footer">
              <div v-if="item.avatar" class="testimonial-item__avatar">
                <img :src="item.avatar" :alt="item['name_' + $i18n.locale]">
              </div>
              <div class="testimonial-item__author">
                <span class="testimonial-item__name">{{item['name_' + $i18n.locale]}}</span>
                <span class="testimonial-item__position">{{item['project_' + $i18n.locale]}}</span>
              </div>
            </div>
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
  name: "Testimonials",
  metaInfo: {
    title: "Отзывы"
  },
  components: {
    Carousel
  },
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
    testimonials (){
      return this.$store.getters.getReviews;
    }
  },
  created() {

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
.testimonials-page {
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
.btn {
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto 0 65px;
  min-width: 220px;
}
.testimonials-slider {
  margin-right: -10%;
}
.testimonial-item {
  &__body {
    background-color: #c0c0c0;
    border-radius: 8px;
    padding: 35px;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 40px 0 0;
    }
  }
  &__text {
    p {
      font-size: 15px;
      font-weight: 400;
      color: #000000;
      margin: 0;
    }
  }
  &__rating {
    width: 118px;
    height: 17px;
    background: url("../assets/images/rating.png") no-repeat left center;
    img {
      display: block;
      margin-left: 1px;
      height: 100%;
      object-fit: cover;
      object-position: left center;
    }
  }
  &__date {
    font-size: 15px;
    font-weight: 400;
    color: #000000;
    margin: 0;
  }
  &__footer {
    display: flex;
    align-items: center;
    margin: 35px 0 0;
  }
  &__avatar {
    margin-right: 25px;
    img {
      display: block;
      border-radius: 50%;
    }
  }
  &__author {
  }
  &__name {
    display: block;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
    margin: 0 0 5px;
  }
  &__position {
    color: #868787;
    font-size: 15px;
  }
}
</style>
