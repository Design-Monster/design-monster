import Component from '@glimmer/component';

export default class StructuralRoutesRyanBlogIndexPageComponent extends Component {
  githubIcon = 'github-alt';
  githubPrefix = 'fab';
  githubSize = '2x';
  linkedinIcon = 'linkedin';
  linkedinPrefix = 'fab';
  linkedinSize = '2x';
  avatarImage = '/assets/images/RyanHeadShot.png';
  aboutMeRoute = 'ryan.about';
  portfolioRoute = 'ryan.portfolio';
  blogRoute = 'ryan.blog';
  resumeRoute = 'ryan.resume';
  contactRoute = 'ryan.contact';
  headerName = 'Ryan Roderick';
  headerTitle = 'Web Developer';
  headerButtonLabel = 'Hire Me!';
  headerButtonRoute = 'ryan.contact';
  emmTitle = 'Ember-Mobile-Menu For Beginners';
  emmDate = '12/01/2020';
  emmDescription = 'A write up for our journey to get Ember Mobile Menu Working on our site.  We go in depth on what we did wrong, assumptions we made, and how we fixed those problems to get it up and running.'
  emmButtonRoute = 'ryan.blog.ember-mobile-menu';
  emmButtonLabel = 'Read More';
  gfbTitle = 'Git For Beginners';
  gfbDate = '12/01/2020';
  gfbDescription = 'We all Struggle With GIT, especially when you\'re just starting out.  We\'ve laid out some basic git commands that all beginners should know.'
  gfbButtonRoute = 'ryan.blog.git-for-beginners';
  gfbButtonLabel = 'Read More';
}
