import Route from '@ember/routing/route';
import { data } from '../data/data';

export default class Ex3Route extends Route {
  model() {
    return data;
  }

  setupController(Controller, model) {
    super.setupController(Controller, model);
    this.controllerFor('ex3').set('dispoItems', data);
  }
}
