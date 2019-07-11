<template>
  <header class="main-header">
    <div class="container">
      <router-link :to="'/' | prefixUrl" class="header-logo">
        <span>
          {
          <span>F</span>rontend
          <span>L</span>ife}
        </span>
      </router-link>
      <nav class="header-menu">
        <ul>
          <li v-for="(item, index) in menu" :key="index">
            <router-link :to="item.url | prefixUrl" exact active-class="is-active">
              <span>{{ $t('menu.' + item.title) }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="language-switcher">
        <div
          @click="changeLocale('ru')"
          :class="[ $i18n.locale === 'ru' ? 'is-active':'', 'language-switcher__item']"
          title="Русский"
        >
          <img src="../assets/images/ru.png" alt="Русский" />
          <span>Ru</span>
        </div>
        <div
          @click="changeLocale('en')"
          :class="[ $i18n.locale === 'en' ? 'is-active':'', 'language-switcher__item']"
          title="English"
        >
          <img src="../assets/images/en.png" alt="English" />
          <span>Eng</span>
        </div>
      </div>
      <div class="header-social">
        <a
          v-for="(item, index) in social"
          :key="index"
          :href="item.url"
          target="_blank"
          rel="nofollow noreferrer noopener"
          class="header-social__item"
        >
          <img :src="item.icon" :alt="item.title" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {
      logo: "assets/images/logo.png",
      menu: [
        {
          title: "home",
          url: "/"
        },
        {
          title: "testimonials",
          url: "/testimonials"
        },
        {
          title: "portfolio",
          url: "/portfolio"
        },
        {
          title: "contacts",
          url: "/contacts"
        }
      ],
      social: [
        {
          title: "Vkontakte",
          icon: "/dist/assets/images/vk.png",
          url: "https://vk.com/alexandr_krymov"
        },
        {
          title: "Facebook",
          icon: "/dist/assets/images/fb.png",
          url: "https://www.facebook.com/alexanderkrymov"
        },
        {
          title: "GitHub",
          icon: "/dist/assets/images/github.png",
          url: "https://github.com/AlexandrKrymov"
        }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      this.$store.commit("changeLoadingStatus", true);

      setTimeout(() => {
        if (this.$i18n.locale === locale) return;

        this.$i18n.locale = locale;
        let currentRouteFullName = this.$route.name;
        let currentRouteName = currentRouteFullName.split("__")[0];
        this.$router.replace({
          name: currentRouteName + "__" + this.$i18n.locale
        });

        this.$store.commit("changeLoadingStatus", false);
      }, 1600);
    },
    getUrl(url) {}
  }
};
</script>

<style lang="scss">
.main-header {
  & > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
  }
}
.header-logo {
  text-decoration: none;
  span {
    color: #ffffff;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 4px;
    span {
      color: rgb(0, 156, 154);
    }
  }
}
.header-menu {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0 25px;
      a {
        display: block;
        font-size: 18px;
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
        padding: 0 0 1px;
        transition: 0.3s;
        &:hover,
        &.is-active {
          box-shadow: inset 0px -10px 0px 0px #00a8cc;
        }
      }
    }
  }
}
.language-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__item {
    display: flex;
    align-items: center;
    margin-right: 30px;
    opacity: 0.4;
    transition: 0.3s;
    cursor: pointer;
    &.is-active {
      cursor: auto;
    }
    &.is-active,
    &:hover {
      opacity: 1;
    }
    &:last-of-type {
      margin-right: 0px;
    }
    img {
      margin-right: 15px;
    }
    span {
      font-size: 18px;
      color: #ffffff;
      font-weight: 600;
    }
  }
}
.header-social {
  display: flex;
  align-items: center;
  &__item {
    position: relative;
    display: flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    margin-right: 30px;
    transition: 0.3s;
    &:last-of-type {
      margin-right: 0;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0px;
      height: 0px;
      border-radius: 50%;
      box-shadow: 0px 0px 20px 7px #ffffff;
      opacity: 0;
      transition: 0.3s;
    }
    img {
      display: block;
    }
    &:hover {
      border-color: #ffffff;
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
