<template>
  <div id="app">
      <HeaderCom/>
      <router-view />
      <Footer/>
  </div>
</template>

<script>
111
import Footer from './common/footer'
import HeaderCom from './common/header'

export default {
  name: 'app',
  components: {
      Footer,
      HeaderCom
  }
}
</script>

<style>

</style>
