import Route from '@ember/routing/route';

export default class RyanIndexRoute extends Route {
  beforeModel() {
    this.transitionTo('ryan.about');
  }
}
