<template>
  <div class="page-content contacts-page">
    <div class="container">
      <div class="contacts-page__head">
        <h1>{{ $store.getters.getH1('contacts', $i18n.locale) }}</h1>
      </div>
    </div>
    <div class="contacts-page__body">
      <div class="container">
        <div class="contacts-page__body--left">
          <div class="contacts-form">
            <span class="contacts-form__title">Для связи со мной</span>
            <p
              class="contacts-form__description"
            >Если у вас остались вопросы, то заполните форму, чтобы я смог с вами связаться</p>
            <contacts-form />
          </div>
        </div>
        <div class="contacts-page__body--right">
          <div class="contacts-map-wrapper">
            <div class="contacts-wrapper">
              <div class="contact-item">
                <span class="contact-item__title">Телефон</span>
                <a href="tel:79000000000">+7 (900) 000-00-00</a>
              </div>
              <div class="contact-item">
                <span class="contact-item__title">Email</span>
                <a href="mailto:mail@mail.ru">alexanderkrymov@yandex.ru</a>
              </div>
            </div>
            <button @click="mapSettings.lang = 'ru_RU'">RU</button>
            <button @click="mapSettings.lang = 'en_US'">EN</button>
            <button @click="map.destroy()">DESTROY</button>
            {{mapSettings.lang}}
            <yandex-map :coords="[56.345663, 41.343515]"
                        ymap-class="contacts-map"
                        :settings="mapSettings"
                        :scroll-zoom="false"
                        zoom="12"
                        :controls="[]"
                        @map-was-initialized="mapSave">
              <ymap-marker :coords="[56.345663, 41.343515]"
                            marker-id="1" />
            </yandex-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactsForm from "../components/ContactsForm";
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  name: "Contacts",
  components: {
    ContactsForm,
    yandexMap,
    ymapMarker
  },
  data() {
    return {
      mapSettings: {
        apiKey: "",
        lang: (this.$i18n.locale == 'ru') ? 'ru_RU' : 'en_US',
        coordorder: "latlong",
        version: "2.1"
      },
      map: null,
    };
  },
  methods: {
    mapSave(instance) {
      this.map = instance;
      this.map.destroy();
      console.log(this.map);
    }
  }
};
</script>

<style lang="scss" scope>
.contacts-page {
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
    .container {
      display: flex;
      flex-wrap: wrap;
    }
    &--left {
      width: 50%;
      padding-right: 20px;
    }
    &--right {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      padding-top: 30px;
    }
  }
}
.contacts-form {
  &__title {
    display: block;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
  }
  &__description {
    font-size: 15px;
    color: #868787;
    margin: 0 0 25px;
  }
}
.contacts-map-wrapper {
  width: 660px;
  max-width: 100%;
  .ymap-container{
    background: #000;
  }
  .contacts-map{
    width: 100%;
    height: 290px;
    border-radius: 10px;
    overflow: hidden;

    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+ */
    filter: rgb(44, 44, 44); /* IE6-9 */
	  -webkit-filter: grayscale(99%); /* Chrome 19+ & Safari 6+ */
    -webkit-backface-visibility: hidden;  /* Fix for transition flickering */
    opacity: 0.5;
  }
}
.contacts-wrapper {
  margin-bottom: 20px;
  .contact-item {
    display: inline-block;
    vertical-align: top;
    margin-right: 50px;
    &:last-of-type {
      margin: 0;
    }
    &__title {
      display: block;
      font-size: 15px;
      color: #868787;
      margin-bottom: 7px;
    }
    a {
      font-size: 18px;
      color: #ffffff;
      text-decoration: none;
      font-weight: 600;
    }
  }
}
</style>
