import Component from '@glimmer/component';

export default class StructuralRoutesRyanContactIndexPageComponent extends Component {
  githubUrl = 'https://github.com/RpRoderick';
  githubIcon = 'github-alt';
  githubPrefix = 'fab';
  githubSize = '2x';
  linkedInUrl = 'https://www.linkedin.com/in/ryan-roderick';
  linkedinIcon = 'linkedin';
  linkedinPrefix = 'fab';
  linkedinSize = '2x';
  avatarImage = '/assets/images/RyanHeadShot.png';
  aboutMeRoute = 'ryan.about';
  portfolioRoute = 'ryan.portfolio';
  blogRoute = 'ryan.blog';
  resumeRoute = 'ryan.resume';
  contactRoute = 'ryan.contact';
  headerNameFirst = 'RYAN';
  headerNameLast = 'Roderick';
  headerTitle = 'Web Developer';
  headerButtonLabel = 'Hire Me!';
  headerButtonRoute = 'ryan.contact';
}
