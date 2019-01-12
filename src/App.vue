<template>
  <div id="app">
    <side-bar/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import SideBar from './components/SideBar';
export default {
  name: 'App',
  components: {
    SideBar
  }
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  min-height: 100vh;
  display: flex;

  > main {
    min-height: 100%;
    padding: 4rem;
    width: 80vw;
  }

  span,
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #333;
    font-family: 'Staatliches', 'tahoma', 'arial';
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin-bottom: 0.75rem;
  }

  a {
    text-decoration: none;
  }
}
</style>
