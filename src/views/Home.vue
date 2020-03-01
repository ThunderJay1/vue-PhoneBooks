<template>
  <div class="home">
    <div id="nav">
      <h2>通讯录</h2>
      <div class="home-content">
        <ul class="ul-list">
          <li><router-link to="/home/about">About</router-link></li>
          <li><router-link to="/home/phonebook">PhoneBook</router-link></li>
          <li><router-link to="/home/edit">Edit</router-link></li>
        </ul>
        <div class="content-right">
          <keep-alive include="About,PhoneBook,Edit">
            <router-view />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0
  }
  .home-content {
    overflow: hidden;
  }
  .ul-list {
    float: left;
    background: #e7dddd;
    li {
      width: 100px;
      height: 50px;
      list-style: none;
      line-height: 50px;
      text-align: center;

      a {
        text-decoration: none
      }
    }
  }
  .content-right {
    margin-left: 100px
  }
</style>
