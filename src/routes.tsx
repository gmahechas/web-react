import IndexDashboard from './dashboard/IndexDashboard';
import IndexCountry from './features/a/country/containers/IndexCountry';
import FormCountry from './features/a/country/containers/FormCountry';
import IndexEstate from './features/a/estate/containers/IndexEstate';
import IndexCity from './features/a/city/containers/IndexCity';
import NoMatchShared from './shared/components/NoMatchShared';

const routes = [
  { path: '/city', component: IndexCity },
  { path: '/estate', component: IndexEstate },
  {
    path: '/country', component: IndexCountry, routes: [
      { path: '/country/create', component: FormCountry },
      { path: '/country/edit/:countryId', component: FormCountry },
    ]
  },
  { path: '/', component: IndexDashboard },
  { path: '*', component: NoMatchShared }
];

export default routes;