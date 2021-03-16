import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex3Controller extends Controller {
  @tracked dispoItems = [];
  @tracked includedItems = [];
  @tracked dispoItems_ = [];
  @tracked includedItems_ = [];

  @action changeDispo(elements) {
    this.dispoItems_ = elements;
  }

  @action changeIncluded(elements) {
    this.dispoItems = [];
    this.includedItems_ = [];
    this.dispoItems_ = [];
    this.includedItems = elements;
  }

  @action add(source, dest, what) {
    dest.pushObjects(what);
    source.removeObjects(what);
    this.includedItems = dest;
  }

  @action remove(source, dest, what) {
    return source;
  }
}
