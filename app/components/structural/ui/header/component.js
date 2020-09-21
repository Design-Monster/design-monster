import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class StructuralUiHeaderComponent extends Component {
    @tracked toggledValue = false;
    @service router;

    @action
    // PREVENT DEFAULT?  Don't want it firing as soon as the page loads.
    switchBetween() {
        let currentURL = this.router.currentURL;
        switch (currentURL) {
            case '/':
                console.log('you are in switch statement - this is where you would put the logic to switch urls');
                window.location.href='http://www.google.com/';
                this.toggledValue = false;
                break;
            case 'http://www.google.com/something':
                console.log('you are in switch statement - this is where you would put the logic to switch urls');
                //window.location.href='http://www.google.com/';
                break;
            case 'http://www.google.com/':
                console.log('you are in switch statement - this is where you would put the logic to switch urls');
                //window.location.href='http://www.google.com/';
                break;
        }
    }

    @action
    toggleValue() {
        switch (this.toggledValue) {
            case false:
                this.toggledValue = true;
                this.switchBetween();
                console.log(this.toggledValue);
                console.log('Run switchBetween False');
                break;
            case true:
                this.toggledValue = false;
                console.log(this.toggledValue);
                console.log('Run switchBetween TRUE');
                break;
        }
    }
}