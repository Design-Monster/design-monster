import Route from '@ember/routing/route';

export default class AminaIndexRoute extends Route {
  beforeModel() {
    this.transitionTo('amina.about');
  }
}
