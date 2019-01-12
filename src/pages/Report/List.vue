<template>
  <div class="list">
    <h1>Lista över tidrapporteringar</h1>
    <list-filter/>
    <hr>
    <report-sheet :reports="reports"/>
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
  data() {
    return {
      reports: [
        {
          id: 1,
          user: 'Magnus Ferm',
          period: '2018 v52',
          status: 'Färdig',
          assistant: 'Quasimódo',
          signed: true
        },
        {
          id: 2,
          user: 'Magnus Ferm',
          period: '2019 v01',
          status: 'Färdig',
          assistant: '',
          signed: false
        },
        {
          id: 3,
          user: 'Magnus Ferm',
          period: '2019 v02',
          status: 'Ej färdig',
          assistant: '',
          signed: false
        },
        {
          id: 4,
          user: 'Ida Ferm',
          period: '2018 v52',
          status: 'Färdig',
          assistant: 'Quasimódo',
          signed: true
        },
        {
          id: 5,
          user: 'Ida Ferm',
          period: '2019 v01',
          status: 'Färdig',
          assistant: '',
          signed: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 2rem 0;
  opacity: 0.5;
}
</style>
