<template>
  <div class="list">
    <h1>Lista över tidrapporteringar</h1>
    <list-filter @select-user="selectUser" @filter-user="filterUser" :users="users"/>
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
    selectUser: function(selectedUser) {
      this.selectedUser = selectedUser;
    },
    filterUser: function(text) {
      this.userFilter = text;
    }
  },
  data() {
    return {
      selectedUser: 0,
      userFilter: '',
      reports: [],
      users: []
    };
  },
  computed: {
    filteredReports: function() {
      if (this.selectedUser) {
        return this.reports.filter(
          report => report.userId === this.selectedUser
        );
      } else if (this.userFilter) {
        return this.reports.filter(report =>
          report.user.toLowerCase().includes(this.userFilter.toLowerCase())
        );
      } else {
        return this.reports;
      }
    }
  },
  mounted() {
    this.reports = [
      {
        id: 1,
        user: 'Magnus Ferm',
        userId: 666,
        period: '2018 v52',
        status: 'Inlämnad',
        signed: true
      },
      {
        id: 2,
        user: 'Magnus Ferm',
        userId: 666,
        period: '2019 v01',
        status: 'Inlämnad',
        signed: false
      },
      {
        id: 3,
        user: 'Magnus Ferm',
        userId: 666,
        period: '2019 v02',
        status: 'Ej inlämnad',
        signed: false
      },
      {
        id: 4,
        user: 'Ida Ferm',
        userId: 333,
        period: '2018 v52',
        status: 'Inlämnad',
        signed: true
      },
      {
        id: 5,
        user: 'Ida Ferm',
        userId: 333,
        period: '2019 v01',
        status: 'Inlämnad',
        signed: false
      },
      {
        id: 6,
        user: 'Melvin Butterscough',
        userId: 111,
        period: '2019 v01',
        status: 'Inlämnad',
        signed: false
      },
      {
        id: 7,
        user: 'Melvin Butterscough',
        userId: 111,
        period: '2019 v02',
        status: 'Ej inlämnad',
        signed: false
      }
    ];

    this.users = [
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
      },
      {
        name: 'Melvin Butterscough',
        id: 111
      }
    ];
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 2rem 0;
  opacity: 0.5;
}
</style>
