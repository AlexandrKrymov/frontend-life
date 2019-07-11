<template>
  <div class="page-content callback-page">
    <div class="form">
      <div :class="[$store.getters.getSubmitStatus == 'Pending' ? 'loading':'', 'form__wrapper']">
        <router-link
          class="form__close"
          :to="'/testimonials' | prefixUrl"
          :title="$t('btns.close')"
        >{{ $t('btns.close') }}</router-link>
        <div class="form__container">
          <transition name="success">
            <div v-if="$store.getters.getCallbackFormStatus !== 'success'">
              <h1>{{ $t('forms.review.title') }}</h1>
              <form id="review-form" @submit.prevent="submit">
                <div class="form__row">
                  <div class="form__col-1-2">
                    <input
                      v-model.trim="$v.name.$model"
                      :class="{ '-error': $v.name.$error }"
                      required
                      type="text"
                      :placeholder="$t('forms.main.name') + ' *'"
                      @input="delayTouch($v.name)"
                    >
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
                    >
                    <div class="error" v-if="!$v.email.required && $v.email.$error">{{ $t('forms.errors.required') }}</div>
                    <div class="error" v-if="!$v.email.email && $v.email.$error">{{ $t('forms.errors.email') }}</div>
                  </div>
                </div>
                <div class="form__row" style="align-items: center;">
                  <div class="form__col-1-2">
                    <input
                      v-model.trim="$v.project.$model"
                      :class="{ '-error': $v.project.$error }"
                      type="text"
                      :placeholder="$t('forms.main.organization')"
                      @input="delayTouch($v.project)"
                    >
                    <!-- <div class="error" v-if="$v.project.$error">{{ $t('forms.errors.required') }}</div> -->
                  </div>
                  <div class="form__col-1-2">
                    <div class="form__stars">
                      <span>{{ $t('forms.main.score') }} *</span>
                      <div class="form__stars-wrapper">
                        <input
                          v-model.trim="$v.rating.$model"
                          required
                          type="radio"
                          @input="delayTouch($v.rating)"
                          id="star-5"
                          name="score"
                          value="5"
                        >
                        <label for="star-5"></label>
                        <input
                          v-model.trim="$v.rating.$model"
                          required
                          type="radio"
                          @input="delayTouch($v.rating)"
                          id="star-4"
                          name="score"
                          value="4"
                        >
                        <label for="star-4"></label>
                        <input
                          v-model.trim="$v.rating.$model"
                          required
                          type="radio"
                          @input="delayTouch($v.rating)"
                          id="star-3"
                          name="score"
                          value="3"
                        >
                        <label for="star-3"></label>
                        <input
                          v-model.trim="$v.rating.$model"
                          required
                          type="radio"
                          @input="delayTouch($v.rating)"
                          id="star-2"
                          name="score"
                          value="2"
                        >
                        <label for="star-2"></label>
                        <input
                          v-model.trim="$v.rating.$model"
                          required
                          type="radio"
                          @input="delayTouch($v.rating)"
                          id="star-1"
                          name="score"
                          value="1"
                        >
                        <label for="star-1"></label>
                      </div>
                    </div>
                    <div class="error" v-if="$v.rating.$error">{{ $t('forms.errors.required') }}</div>
                  </div>
                </div>
                <div class="form__row">
                  <div class="form__col-1-1">
                    <textarea
                      v-model.trim="$v.review.$model"
                      :class="{ '-error': $v.review.$error }"
                      type="text"
                      :placeholder="$t('forms.main.review')"
                      @input="delayTouch($v.review)"
                    ></textarea>
                    <!-- <div class="error" v-if="$v.review.$error">{{ $t('forms.errors.required') }}</div> -->
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
              :title="$t('forms.review.success.title')"
              :text="$t('forms.review.success.text')"
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

const reviewForm = new Form(['name', 'email', 'project', 'rating', 'review']);

export default {
  name: "LeaveReview",
  components: {
    Success
  },
  data() {
    return {
      name: "",
      email: "",
      project: "",
      rating: "",
      review: ""
    };
  },
  validations: reviewForm.validations,
  methods: {
    delayTouch($v) {
      reviewForm.delayTouch($v);
    },
    submit() {
      reviewForm.submit(this);
    },
    resetForm() {
      reviewForm.resetForm(this);
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
