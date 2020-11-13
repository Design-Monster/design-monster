import EmberRouter from '@ember/routing/router';
import config from 'design-monster/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('ryan', function() {
    this.route('about', function() {
    });
    this.route('portfolio', function() {
    });
    this.route('blog', function() {
      this.route('ember-mobile-menu');
      this.route('git-for-beginners');
    });
    this.route('resume', function() {
    });
    this.route('contact', function() {
    });
  });
});
