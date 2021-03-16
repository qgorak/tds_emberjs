import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TestNewRoute extends Route {
  @action create() {
    var contact = this.store.createRecord('contact', {
      prenom: 'azdazd',
      nom: 'qsdqsdqsd',
      email: 'qsdq',
    });
    contact.save();
  }
}
