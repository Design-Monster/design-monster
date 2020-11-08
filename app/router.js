import EmberRouter from '@ember/routing/router';
import config from 'design-monster/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('ryan', function() {
    this.route('portfolio');
    this.route('blog');
    this.route('resume');
    this.route('contact');
  });
});
