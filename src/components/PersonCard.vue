<template>
  <div class="phonecard">
    <div class="person-card-img">
      <img src="https://cn.vuejs.org/images/logo.png" alt="头像">
    </div>

    <div class="person-card-content">
      <div class="person-card-info">
        <p v-if="telState" @dblclick="telState = false">{{info.name}}</p>
        <input type="text" v-model="info.name" v-else @blur="telState = true" @keyup.enter="telState = true" v-focus>
      </div>

      <div class="person-card-info">
        <p v-if="nameState" @dblclick="nameState = false">{{info.tel}}</p>
        <input type="text" v-model="info.tel" v-else @blur="nameState = true" @keyup.enter="nameState = true" v-focus>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: ['info'],
  data () {
    return {
      telState: true,
      nameState: true
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.phonecard {
    padding: 10px;
    box-shadow: 0 0 3px #ddd;
    float: left;
  }

  .person-card-img {
    width: 40px;
    height: 40px;
    padding: 10px;
    float: left;

    img {
      width: 100%;
      height: auto;
    }
  }

  .person-card-content {
    float: right;
    width: 100px;

    .person-card-info {
      p {
        height: 20px;
        line-height: 20px;
        padding: 5px;
      }

      input {
        box-sizing: border-box;
        width: 100%;
        height: 20px;
        outline: none;
      }
    }
  }
</style>
