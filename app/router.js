import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mainpage', {path: '/'});
  this.route('alarms');
  this.route('editalarms', {path: ':name'});
  this.route('playalarmsounds');
});

export default Router;
