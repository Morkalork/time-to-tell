<template>
  <table class="reportSheet">
    <thead>
      <tr>
        <th>Brukare</th>
        <th>Tidsperiod</th>
        <th>Status</th>
        <th>Assistent</th>
        <th>Signerat</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="report in reports" :key="report.id">
        <td>{{report.user}}</td>
        <td>{{report.period}}</td>
        <td>{{report.status}}</td>
        <td>{{report.assistant}}</td>
        <td><i class='fas fa-fw fa-check' v-if='report.signed'></i></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['reports']
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
