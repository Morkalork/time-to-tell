<template>
  <div class="list">
    <h1>Lista över tidrapporteringar</h1>
    <list-filter @click-filter="clickFilter"/>
    <hr>
    <report-sheet :reports="filteredReports"/>
  </div>
</template>

<script>
import ListFilter from './ListFilter';
import ReportSheet from './ReportSheet';

export default {
  name: 'List',
  components: {
    ListFilter,
    ReportSheet
  },
  methods: {
    clickFilter: function(selectedUser) {
      if (selectedUser) {
        this.selectedUser = selectedUser;
        this.filteredReports = this.reports.filter(
          report => report.userId === selectedUser
        );
      } else {
        this.filteredReports = this.reports;
      }
    }
  },
  data() {
    return {
      selectedUser: 0,
      reports: [],
      filteredReports: []
    };
  },
  mounted() {
    this.reports = [
      {
        id: 1,
        user: 'Magnus Ferm',
        userId: 666,
        period: '2018 v52',
        status: 'Färdig',
        assistant: 'Quasimódo',
        signed: true
      },
      {
        id: 2,
        user: 'Magnus Ferm',
        userId: 666,
        period: '2019 v01',
        status: 'Färdig',
        assistant: '',
        signed: false
      },
      {
        id: 3,
        user: 'Magnus Ferm',
        userId: 666,
        period: '2019 v02',
        status: 'Ej färdig',
        assistant: '',
        signed: false
      },
      {
        id: 4,
        user: 'Ida Ferm',
        userId: 333,
        period: '2018 v52',
        status: 'Färdig',
        assistant: 'Quasimódo',
        signed: true
      },
      {
        id: 5,
        user: 'Ida Ferm',
        userId: 333,
        period: '2019 v01',
        status: 'Färdig',
        assistant: '',
        signed: false
      }
    ];
    this.filteredReports = this.reports;
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 2rem 0;
  opacity: 0.5;
}
</style>
