<template>
  <table class="reportSheet">
    <thead>
      <tr>
        <th>Användare</th>
        <th>Tidsperiod</th>
        <th>Status</th>
        <th>Signerad</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="report in reports" :key="report.id">
        <td>
          <span
            v-for="(part, index) in getUserParts(report.userName)"
            :key="index"
            v-bind:class="{highlight: part.highlight}"
          >{{part.name}}</span>
        </td>
        <td>{{report.period}}</td>
        <td>{{report.status}}</td>
        <td>
          <i class="fas fa-fw fa-check" v-if="report.signed"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['reports', 'filter'],
  methods: {
    getUserParts: function(userName) {
      const name = userName.toLowerCase();
      let currentIndex = name.indexOf(this.filter);
      if (!this.filter || currentIndex === -1) {
        return [{ name: name, highlight: false }];
      }

      const result = [
        { name: name.substring(0, currentIndex), highlight: false }
      ];
      while (currentIndex !== -1) {
        result.push({
          name: name.substring(currentIndex, currentIndex + this.filter.length),
          highlight: true
        });
        const newIndex = name.indexOf(this.filter, currentIndex + 1);
        if (newIndex === -1) {
          break;
        } else {
          result.push({
            name: name.substring(currentIndex + this.filter.length, newIndex),
            highlight: false
          });
          currentIndex = newIndex;
        }
      }

      if (currentIndex + this.filter.length < name.length) {
        result.push({
          name: name.substring(currentIndex + this.filter.length),
          highlight: false
        });
      }

      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.reportSheet {
  min-width: 75%;
  max-width: 40rem;
  border-collapse: collapse;
  thead {
    border-bottom: 2px #ccc solid;
    tr {
      th {
        text-align: left;
        padding-bottom: 0.5rem;
      }
    }
  }
  tbody {
    tr {
      td {
        span {
          &.highlight {
            background-color: #f8ff00;
          }
        }
      }
      &:first-child {
        td {
          padding-top: 0.5rem;
        }
      }
    }
  }
}
</style>
