<template>
  <div class="list">
    <h1>Lista över tidrapporteringar</h1>
    <list-filter @select-user="selectUser" @filter-user="filterUser" :users="users"/>
    <hr>
    <report-sheet :reports="filteredReports" :filter="userFilter"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
      users: []
    };
  },
  computed: {
    filteredReports: function() {
      const reports = this.reports;
      if (!reports) {
        return [];
      } else if (this.selectedUser) {
        return reports.filter(report => report.userId === this.selectedUser);
      } else if (this.userFilter) {
        return reports.filter(report =>
          report.userName.toLowerCase().includes(this.userFilter.toLowerCase())
        );
      } else {
        return reports;
      }
    },
    ...mapState({
      reports: (state) => {
        return state.report.reports;
      }
    })
  },
  created() {
    this.$store.dispatch('report/load', { userId: this.selectedUser });
  },
  mounted() {
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
