import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('story', {path: '/story/:story_id'});
  this.route('admin');
  this.route('update', {path: '/edit/:story_id'});
});

export default Router;
