<template>
  <form id="contacts-form" class="contacts-form" @submit.prevent="submit">
    <div class="form__row">
      <div class="form__col-1-2">
        <div class="form__row">
          <input
            v-model.trim="$v.name.$model"
            :class="{ '-error': $v.name.$error }"
            required
            type="text"
            :placeholder="$t('forms.main.name') + ' *'"
            @input="delayTouch($v.name)"
          />
          <div class="error" v-if="$v.name.$error">{{ $t('forms.errors.required') }}</div>
        </div>

        <div class="form__row">
          <input
            v-model.trim="$v.email.$model"
            :class="{ '-error': $v.email.$error }"
            required
            type="email"
            :placeholder="$t('forms.main.email') + ' *'"
            @input="delayTouch($v.email)"
          />
          <div
            class="error"
            v-if="!$v.email.required && $v.email.$error"
          >{{ $t('forms.errors.required') }}</div>
          <div
            class="error"
            v-if="!$v.email.email && $v.email.$error"
          >{{ $t('forms.errors.email') }}</div>
        </div>

        <div class="form__row">
          <input
            v-model.trim="$v.phone.$model"
            :class="{ '-error': $v.phone.$error }"
            type="tel"
            :placeholder="$t('forms.main.phone')"
            @input="delayTouch($v.phone)"
          />
          <div class="error" v-if="$v.phone.$error">{{ $t('forms.errors.phone') }}</div>
        </div>
      </div>
      <div class="form__col-1-2">
        <div class="form__row">
          <textarea v-model.trim="$v.comment.$model" :placeholder="$t('forms.main.comment')"></textarea>
        </div>
      </div>
    </div>
    <div class="form__btns">
      <span v-if="$i18n.locale === 'ru'" class="form__privacy-policy">{{ $t('forms.main.privacy') }}</span>
      <button type="submit" class="btn">{{ $t('btns.submit') }}</button>
    </div>
  </form>
</template>

<script>
import Success from "../components/Success";
import FormModule from "../modules/forms";

const contactForm = new FormModule(["name", "email", "phone", "comment"]);

export default {
  name: "Callback",
  components: {
    Success
  },
  data() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      comment: this.comment
    };
  },
  validations: contactForm.validations,
  methods: {
    delayTouch($v) {
      contactForm.delayTouch($v);
    },
    submit() {
      contactForm.submit(this);
    },
    resetForm() {
      contactForm.resetForm(this);
    }
  }
};
</script>

<style lang="scss" scope>
.success-enter-active,
.success-leave-active {
  transition: all 1s;
}
.success-enter,
.success-leave {
  opacity: 0;
}
.success-enter-to,
.success-leave-to {
  opacity: 1;
}
.contacts-form {
  textarea {
    height: 200px;
  }
}
</style>
