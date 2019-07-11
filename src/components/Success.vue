<template>
  <div class="success">
    <img class="success__img" src="../assets/images/form-success.png" alt>
    <div>
      <p class="success__title">{{ title }}</p>
      <p class="success__text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text"]
};
</script>

<style lang="scss" scope>
.success {
  .success__img{
    display: block;
    margin: 0 auto 35px;
  }
  p.success__title{
    font-size: 28px;
    color: #ccc;
    margin: 0;
  }
  p.success__text{
    font-size: 16px;
    color: #cccccc;
    margin: 15px 0 0;
  }
}
</style>
