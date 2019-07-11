<template>
  <div v-if="project" class="page-content portfolio-item-page">
    <vue-picture-swipe :iphone="project.iphone" :mac="project.mac" :desctopImages="screenshots.desctop" :mobileImages="screenshots.mobile"></vue-picture-swipe>
    <div class="container">
      <div class="portfolio-item">
        <div class="portfolio-item__left">
          <h1>{{ project['title_' + $i18n.locale] }}</h1>
          <p>{{ project['description_' + $i18n.locale] }}</p>
          <div class="portfolio-item__blocks">
            <div class="portfolio-item__blocks-item">
              <span class="portfolio-item__blocks-title">{{ $t('other.success') }}:</span>
              <p>{{ project.success }}</p>
            </div>
            <div class="portfolio-item__blocks-item">
              <span class="portfolio-item__blocks-title">{{ $t('other.year') }}</span>
              <p>{{ project.year }}</p>
            </div>
          </div>
        </div>
        <div class="portfolio-item__right">
          <div class="portfolio-item__mockup">
            <img @click.prevent.stop="click" :src="image" :alt="h1" :title="h1">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/images/portfolio/items/placeholder.png";
import VuePictureSwipe from "../components/VuePictureSwipe";
export default {
  name: "PortfolioItem",
  props: ["slug"],
  components: {
    VuePictureSwipe
  },
  data() {
    return {
      h1: "Internet.org",
      description:
        "Turned McDonald’s Netherlands app into a rich, personalised user experience. Enabling rewards, loyalty and geo-targeted offers with fun UI animations. With great team effort we managed to design and develop this app within 2-3 months.",
      technologies: "HTML5, CSS3, Pug,Bem, VueJS, Vuex",
      year: "2018",
      image: img,
      screenshots: {
        desctop: [
        {
          src: "http://via.placeholder.com/700x400",
          thumbnail: "http://via.placeholder.com/64x64",
          w: 700,
          h: 400,
          alt: "some numbers on a grey background" // optional alt attribute for thumbnail image
        },
        {
          src: "http://via.placeholder.com/1200x900",
          thumbnail: "http://via.placeholder.com/64x64",
          w: 1200,
          h: 900
        }
      ],
        mobile: [
        {
          src: "http://via.placeholder.com/50x50",
          thumbnail: "http://via.placeholder.com/64x64",
          w: 50,
          h: 50,
          alt: "some numbers on a grey background" // optional alt attribute for thumbnail image
        },
        {
          src: "http://via.placeholder.com/100x100",
          thumbnail: "http://via.placeholder.com/64x64",
          w: 100,
          h: 100
        }
      ]
      }
    };
  },
  computed: {
    project() {
      let projects = this.$store.getters.getPortfolioItems;
      if (!projects) return undefined;
      let project = projects.filter(item => item.slug === this.slug);
      return project[0];
    }
  },
  methods: {
    click(){
      console.log(document.querySelectorAll('#desctop-gallery')[0].children[0].click());
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-item-page {
  background: linear-gradient(
    to bottom,
    transparent 199px,
    rgba(16, 16, 22, 0.8) 200px
  );
}
.portfolio-item {
  display: flex;
  flex-wrap: wrap;

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33.5%;
    padding-right: 30px;
    max-width: 555px;
    padding-bottom: 27px;
  }
  &__right {
    width: 66.5%;
  }
  h1 {
    text-transform: none;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
  }
  p {
    font-size: 15px;
    line-height: 20px;
    color: #c0c0c0;
  }
  &__blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      width: calc(50% - 25px);
      background-color: #1b272e;
      border-radius: 10px;
      padding: 35px;
      p {
        margin: 0;
        font-size: 15px;
        line-height: 17px;
      }
    }
    &-title {
      font-size: 22px;
      font-weight: 700;
      color: #fefefe;
      display: block;
      margin-bottom: 15px;
    }
  }
  &__mockup {
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
