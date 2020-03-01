<template>
  <form class="app-login">
    <div class="form-group">
      <input type="text" placeholder="请输入账号" v-model="username">
    </div>
    <div class="form-group">
      <input type="password" placeholder="请输入密码" v-model="userpass">
    </div>
    <div class="form-group">
      <input type="button" value="登录" @click="getLogin">
    </div>
  </form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      userpass: ''
    }
  },
  methods: {
    getLogin () {
      /* this.axios.post('/api/users', {
        username: this.username,
        userpass: this.userpass
      })
        .then((res) => {
          console.log(res)
          if (res.data.state === '200') {
            var token = res.data.token
            sessionStorage.setItem('token', token)
            var url = this.$route.query.redirect
            url = url || '/'
            this.$router.replace(url)
          } else {
            console.log('登陆失败')
          }
        })
        .catch((err) => {
          console.log(err)
        }) */
      var token = 'asdf'
      sessionStorage.setItem('token', token)
      var url = this.$route.query.redirect
      url = url || '/home'
      this.$router.replace(url)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
