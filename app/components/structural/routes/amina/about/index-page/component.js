import Component from '@glimmer/component';

export default class StructuralRoutesAminaIndexPageComponent extends Component {
  linkedInUrl = 'https://www.linkedin.com/in/achidiac/';
  linkedinIcon = 'linkedin';
  linkedinPrefix = 'fab';
  linkedinSize = '2x';
  avatarImage = 'https://designmonster.s3.us-east-2.amazonaws.com/aminaheadshot.png';
  aboutMeRoute = 'amina.about';
  portfolioRoute = 'amina.portfolio';
  resumeRoute = 'amina.resume';
  contactRoute = 'contact';
  sideBarMenu = true;
  headerNameFirst = 'AMINA';
  headerNameLast = 'Roderick';
  headerTitle = 'User Experience Designer';
  headerButtonLabel = 'Hire Me!';
  routeSlotTwoIcon = 'images';
  routeSlotTwoIconPrefix = 'fas';
}
