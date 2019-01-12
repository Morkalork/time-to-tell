import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import ReportList from '../pages/Report/List';
import ReportArchive from '../pages/Report/Archive';
import Profile from '../pages/Profile/Profile';
import Schedule from '../pages/Schedule/Schedule';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/report/list',
      name: 'ReportList',
      component: ReportList
    },
    {
      path: '/report/archive',
      name: 'ReportArchive',
      component: ReportArchive
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    }
  ]
});
