<template>
  <el-menu class="navbar" mode="horizontal">
    <i class="hamburger-container glyphicon glyphicon-category" @click="toggleSideBar" :class="{'is-active': sidebar.opened}"></i>
    <div class="right-menu">
      <button  @click="logout" class='el-button el-button--primary' type='button'>
        退出登录
      </button>
    </div>
  </el-menu>
</template>

<script type="text/javascript">

export default {
  data () {
    return {
      log: 1
    }
  },
  computed: {
  },
  methods: {
    logout () {
      this.$store.dispatch('LogOut').then((res) => {
        this.$router.push({path: '/login'})
      })
    },
    toggleSideBar () {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style lang='less'>
.navbar {
  height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  line-height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 0px !important;
  .hamburger-container {
    outline: none;
    line-height: 50px;
    float: left;
    font-size: 20px;
    cursor: pointer;
    transition: all ease 0.5s;
    transform: rotate(90deg);
    &.is-active{
      transform: rotate(0deg);
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
  }
}
</style>
