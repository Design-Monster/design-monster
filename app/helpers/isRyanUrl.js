import Helper from "@ember/component/helper";
import { inject as service } from '@ember/service';

export default class isRyanUrl extends Helper {
  @service router;

  compute() {
    let rootURL = this.router.rootURL;
    let ryanAboutURL = rootURL + 'ryan/about';
    let ryanBlogUrl = rootURL + 'ryan/blog';
    let ryanBlogGit = rootURL + 'ryan/blog/git-for-beginners';
    let ryanBlogEmm = rootURL + 'ryan/blog/ember-mobile-menu';
    let ryanPortfolioUrl = rootURL + 'ryan/portfolio';
    let ryanResumeUrl = rootURL + 'ryan/resume';
    let currentURL = this.router.currentURL;

    if (currentURL === ryanAboutURL || currentURL === ryanBlogUrl || currentURL === ryanBlogGit || currentURL === ryanBlogEmm || currentURL === ryanPortfolioUrl || currentURL === ryanResumeUrl) {
      return true;
    }
  }
}