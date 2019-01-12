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
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  td,
  th {
    font-family: 'Staatliches', 'tahoma', 'arial';
    color: #333;
  }

  a {
    font-family: 'Staatliches', 'tahoma', 'arial';
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin-bottom: 0.75rem;
  }
}
</style>
