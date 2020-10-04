import Application from 'design-monster/app';
import config from 'design-monster/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
