<template>
  <div class="edit">
    添加
    <div class="wrap">
      <div class="form-username">
        <input type="text" v-model="username">
      </div>
      <div class="form-userpass">
        <input type="text" v-model="userpass">
      </div>
      <div>
        <el-button type="primary" native-type="button" @click="add">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Edit',
  data () {
    return {
      username: '',
      userpass: ''
    }
  },
  methods: {
    ...mapMutations([
      'addPersonCards'
    ]),
    add () {
      this.addPersonCards({
        name: this.username,
        tel: this.userpass
      })
      this.username = '',
      this.userpass = ''
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
