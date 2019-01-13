<template>
  <div class="listFilter">
    <section>
      <p>Användare</p>
      <select v-model="selectedUser" v-on:change='selectUser'>
        <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
      </select>
    </section>
    <section>
      <p>Fritext</p>
      <input v-model="freetext" v-on:keyup='debouncedFilterUser'>
    </section>
  </div>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
  props: ['users'],
  data() {
    return {
      selectedUser: 0,
      freetext: ''
    };
  },
  methods: {
    selectUser: function() {
      this.$emit('select-user', this.selectedUser);
    },
    debouncedFilterUser: debounce(function(e) {
      console.log('Emit filter user ');
      this.$emit('filter-user', e.target.value);
    }, 250)
  }
};
</script>

<style lang="scss" scoped>
.listFilter {
  display: flex;

  > section {
    margin-right: 1rem;

    p {
      font-weight: bold;
      height: 1.2rem;
    }

    input,
    select,
    button {
      padding: 0.5rem 1rem;
    }

    input,
    select {
      width: 14rem;
    }
  }
}
</style>
