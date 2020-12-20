import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class DynamicDashboardBlockComponent extends Component { 
  @action
  scrollToSectionOne() {
    document.getElementById('sectionOne').scrollIntoView({
      behavior: 'smooth'
    });
  }

  @action
  scrollToSectionTwo() {
    document.getElementById('sectionTwo').scrollIntoView({
      behavior: 'smooth'
    });
  }

  @action
  scrollToSectionThree() {
    document.getElementById('sectionThree').scrollIntoView({
      behavior: 'smooth'
    });
  }

  @action
  scrollToSectionFour() {
    document.getElementById('sectionFour').scrollIntoView({
      behavior: 'smooth'
    });
  }

  @action
  scrollToSectionFive() {
    document.getElementById('sectionFive').scrollIntoView({
      behavior: 'smooth'
    });
  }

  @action
  scrollToSectionSix() {
    document.getElementById('sectionSix').scrollIntoView({
      behavior: 'smooth'
    });
  }
}