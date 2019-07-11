<template>
  <div class="page-content callback-page">
    <div class="form">
      <div :class="[$store.getters.getSubmitStatus == 'Pending' ? 'loading':'', 'form__wrapper']">
        <router-link
          class="form__close"
          :to="'/' | prefixUrl"
          :title="$t('btns.close')"
        >{{ $t('btns.close') }}</router-link>
        <div class="form__container">
          <transition name="success">
            <div v-if="$store.getters.getCallbackFormStatus !== 'success'">
              <h1>{{ $t('forms.callback.title') }}</h1>
              <p>{{ $t('forms.callback.description') }}</p>
              <form id="callback-form" @submit.prevent="submit">
                <div class="form__row">
                  <div class="form__col-1-2">
                    <input
                      v-model.trim="$v.name.$model"
                      :class="{ '-error': $v.name.$error }"
                      type="text"
                      autofocus
                      :placeholder="$t('forms.main.name') + ' *'"
                      @input="delayTouch($v.name)"
                    />
                    <div class="error" v-if="$v.name.$error">{{ $t('forms.errors.required') }}</div>
                  </div>

                  <div class="form__col-1-2">
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
                </div>
                <div class="form__row">
                  <div class="form__col-1-1">
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
                <div class="form__row">
                  <div class="form__col-1-1">
                    <textarea
                      v-model.trim="$v.comment.$model"
                      :placeholder="$t('forms.main.comment')"
                    ></textarea>
                  </div>
                </div>
                <div class="form__btns">
                  <span
                    v-if="$i18n.locale === 'ru'"
                    class="form__privacy-policy"
                  >{{ $t('forms.main.privacy') }}</span>
                  <button type="submit" class="btn">{{ $t('btns.submit') }}</button>
                </div>
              </form>
            </div>
            <success
              v-if="$store.getters.getCallbackFormStatus === 'success'"
              :title="$t('forms.callback.success.title')"
              :text="$t('forms.callback.success.text')"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Success from "../components/Success";
import Form from "../modules/forms";

const collbackForm = new Form(['name', 'email', 'phone', 'comment']);

export default {
  name: "Callback",
  components: {
    Success
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      comment: ""
    };
  },
  validations: collbackForm.validations,
  methods: {
    delayTouch($v) {
      collbackForm.delayTouch($v);
    },
    submit() {
      collbackForm.submit(this);
    },
    resetForm() {
      collbackForm.resetForm(this);
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
</style>
