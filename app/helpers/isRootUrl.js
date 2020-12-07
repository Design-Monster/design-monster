import Helper from "@ember/component/helper";
import { inject as service } from '@ember/service';

export default class isRootUrl extends Helper {
  @service router;

  compute() {
    let rootURL = this.router.rootURL;
    let contactUrl = rootURL + 'contact';
    let currentURL = this.router.currentURL;

    if (currentURL === rootURL || currentURL === contactUrl) {
      return true;
    }
  }
}