import Helper from "@ember/component/helper";
import { inject as service } from '@ember/service';

export default class isAminaUrl extends Helper {
  @service router;

  compute() {
    let rootURL = this.router.rootURL;
    let aminaAboutURL = rootURL + 'amina/about';
    let aminaPortfolioUrl = rootURL + 'amina/portfolio';
    let aminaResumeUrl = rootURL + 'amina/resume';
    let currentURL = this.router.currentURL;

    if (currentURL === aminaAboutURL || currentURL === aminaPortfolioUrl || currentURL === aminaResumeUrl) {
      return true;
    }
  }
}