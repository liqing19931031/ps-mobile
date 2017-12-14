<template lang="html">
  <div class="app-wrapper">
		<sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			<!-- <navbar></navbar> -->
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'layout',
  components: {
    AppMain,
    Navbar
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
}
</style>
