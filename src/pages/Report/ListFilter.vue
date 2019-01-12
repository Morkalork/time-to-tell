<template>
  <div class="listFilter">
    <section>
      <p>Brukare</p>
      <select v-model="selectedUser">
        <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
      </select>
    </section>
    <section>
      <p>Fritext</p>
      <input v-model="freetext">
    </section>
    <section>
      <p></p>
      <button v-on:click="onButtonClick">Filtrera</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedUser: 0,
      freetext: '',
      users: [
        {
          name: '---',
          id: 0
        },
        {
          name: 'Magnus Ferm',
          id: 666
        },
        {
          name: 'Ida Ferm',
          id: 333
        }
      ]
    };
  },
  methods: {
    onButtonClick: function() {
      this.$emit('click-filter', this.selectedUser);
    }
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
