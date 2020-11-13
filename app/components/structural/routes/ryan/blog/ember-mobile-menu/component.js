import Component from '@glimmer/component';

export default class StructuralRoutesRyanBlogEmberMobileMenuComponent extends Component {
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
  emmTitle = 'Ember-Mobile-Menu Set Up';
  emmAuthor = 'Ryan Roderick & Matthew Roderick';
  emmUrl = 'www.something.com';
  emmCreator = 'Nate Something';
  emmParagraphOne = 'In this post, we will show you how to use ember-mobile-menu, the issues that we overcame in setting it up, and the final implementation, with real-world code examples. Let\'s preface this by saying that we are both Junior Developers, not inexperienced, but certainly not gurus. We have spent the last few years learning HTML, CSS, and JavaScript (and are currently looking for our first entry-level positions!) We love Ember, but have experience with React as well.';
  emmParagraphTwo = 'We\'ll take you through our attempts, show you what not to do, and show you what we did to actually make it work correctly. We didn\'t do this on our own. Something that sets the Ember community apart from others is that you can almost always speak directly with the authors of an add-on, asking questions through Discord and working through your code. When we got stuck, we messaged the very helpful developer of this add-on Nick Schot, who gave us some much-needed guidance in the right direction.';
  emmParagraphThree = 'We are using Ember Octane 3.21. This is for a simple portfolio site. We wanted a way to implement a user-friendly mobile menu that was capable of swipe gesturing, and we wanted one that we didn\'t need to spend weeks building. Enter Ember-Mobile-Menu.';
  emmParagraphFourTitle = '1st Attempt:';
}
