import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  contactRoute = 'contact';
  buttonLabel = 'Hire Me!';
  //ryan
  ryanGithubUrl = 'https://github.com/RpRoderick';
  ryanGithubIcon = 'github-alt';
  ryanGithubPrefix = 'fab';
  ryanGithubSize = '2x';
  ryanLinkedInUrl = 'https://www.linkedin.com/in/ryan-roderick';
  ryanLinkedinIcon = 'linkedin';
  ryanLinkedinPrefix = 'fab';
  ryanLinkedinSize = '2x';
  ryanAvatarImage = '/assets/images/headshotryan.png';
  ryanAboutMeRoute = 'ryan.about';
  ryanPortfolioRoute = 'ryan.portfolio';
  ryanBlogRoute = 'ryan.blog';
  ryanResumeRoute = 'ryan.resume';
  //amina
  aminaLinkedInUrl = 'https://www.linkedin.com/in/achidiac/';
  aminaLinkedinIcon = 'linkedin';
  aminaLinkedinPrefix = 'fab';
  aminaLinkedinSize = '2x';
  aminaAvatarImage = '/assets/images/aminaheadshot.png';
  aminaAboutMeRoute = 'amina.about';
  aminaPortfolioRoute = 'amina.portfolio';
  aminaResumeRoute = 'amina.resume';
}
