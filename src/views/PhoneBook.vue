<template>
  <div class="phone-book">
    通讯录
    <el-input v-model="searchcontent" placeholder="请输入内容" size="medium" style="width:200px;display:block"></el-input>
    <div class="phone-card">
      <PersonCard v-for="(item, index) in currentBooks(searchcontent)" :key="index" :info="item"></PersonCard>
    </div>
  </div>
</template>

<script>
import PersonCard from '../components/PersonCard.vue'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'PhoneBook',
  components: {
    PersonCard
  },
  data () {
    return {
      searchcontent: ''
    }
  },
  computed: {
    ...mapState([
      'personCard'
    ]),
    ...mapGetters([
      'currentBooks'
    ])
  },
  created () {
    this.getPersonCardsSync()
  },
  methods: {
    ...mapActions([
      'getPersonCardsSync'
    ])
  }
}
</script>

<style lang="less" scoped>
  .phone-book {
    .phone-card {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap; /* 一行放不下就换行 */
    }
  }
</style>
