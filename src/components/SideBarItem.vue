<template>
  <li class="sideBarItem" v-bind:class="{active: isOpen}">
    <i :class="getIconName(icon)"></i>
    <router-link v-bind:to="url">
      <span v-on:click="onClick">
        {{ text }}
      </span>
    </router-link>
    <transition name="children" tag="div">
      <div class="children" v-if="isOpen">
        <ul>
          <slot></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'SideBarItem',
  props: ['url', 'text', 'icon', 'isOpen'],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    getIconName: function(iconName) {
      return `fas fa-fw fa-${iconName}`;
    },
    onClick: function() {
      this.$emit('click-item', this.url);
    }
  }
};
</script>

<style lang='scss' scoped>
.sideBarItem {
  list-style-type: none;
  margin-left: 1rem;
  font-size: 2rem;

  a {
    font-weight: bold;
    padding-left: 0.5rem;
    transition: 0.15s;
  }

  &:hover {
    &:not(.active) {
      a {
        padding-left: 0.75rem;
      }
    }
  }

  .children-leave-active,
  .children-enter-active {
    transition: 0.5s;
  }
  .children-enter {
    transform: translate(-100%, 0);
  }
  .children-leave-to {
    transform: translate(-100%, 0);
  }

  .children {
    ul {
      margin-left: -1rem;
      li {
        padding: 0;
        font-size: 1.25rem;
        margin-left: 3rem;
      }
    }
  }
}
</style>
