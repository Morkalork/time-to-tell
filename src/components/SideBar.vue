<template>
  <nav>
    <ul>
      <side-bar-item url="/" text="Hem" icon="home" :isOpen="activeRoute === '/'"/>
      <side-bar-item
        url="/report"
        text="Tidrapport"
        icon="clock"
        :isOpen="activeRoute.includes('/report')"
      >
        <side-bar-item url="/report/list" text="Lista" icon="angle-right"/>
        <side-bar-item url="/report/archive" text="Arkiv" icon="angle-right"/>
      </side-bar-item>
      <side-bar-item
        url="/profile"
        text="Profil"
        icon="user"
        v-on:click="onSideBarItemClick('/profile')"
        :isOpen="activeRoute === '/profile'"
      />
      <side-bar-item
        url="/schedule"
        text="Schema"
        icon="calendar-alt"
        v-on:click="onSideBarItemClick('/schedule')"
        :isOpen="activeRoute === '/schedule'"
      />
    </ul>
  </nav>
</template>

<script>
import SideBarItem from './SideBarItem';
export default {
  name: 'SideBar',
  components: {
    SideBarItem
  },
  data() {
    return {
      activeRoute: '/'
    };
  },
  watch: {
    $route(to, from) {
      this.activeRoute = to.path;
    }
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
nav {
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #8ce3ff;
  min-height: 100%;
}
</style>
