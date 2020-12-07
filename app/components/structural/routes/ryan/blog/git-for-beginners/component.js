import Component from '@glimmer/component';

export default class StructuralRoutesRyanBlogEmberMobileMenuComponent extends Component {
  githubUrl = 'https://github.com/RpRoderick';
  githubIcon = 'github-alt';
  githubPrefix = 'fab';
  githubSize = '2x';
  linkedInUrl = 'https://www.linkedin.com/in/ryan-roderick';
  linkedinIcon = 'linkedin';
  linkedinPrefix = 'fab';
  linkedinSize = '2x';
  avatarImage = '/assets/images/ryanheadshot.png';
  aboutMeRoute = 'ryan.about';
  portfolioRoute = 'ryan.portfolio';
  blogRoute = 'ryan.blog';
  resumeRoute = 'ryan.resume';
  contactRoute = 'contact';
  sideBarMenu = true;
  headerNameFirst = 'RYAN';
  headerNameLast = 'Roderick';
  headerTitle = 'Web Developer';
  headerButtonLabel = 'Hire Me!';
}
