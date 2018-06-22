<template>
  <div id="app">
    <div class="agileits_main">
      <appheader />
      <banner />
    </div>
    <about />
		<services />
		<essentials />
		<blog />
		<newsletter />
		<contact />
		<map />
		<appfooter />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>