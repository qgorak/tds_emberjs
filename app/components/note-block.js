import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NoteBlockComponent extends Component {
  max;
  @tracked text;
  constructor() {
    super(...arguments);
    this.text = this.args.value;
    this.max=this.args.maxLength;
  }
  get size() {
    if (this.text)
      return this.max - this.text.length;
    return this.max;
  }
  get isFull() {
    return this.max <= this.size;
  }

  @action
  clear() {
    this.text = '';
  }

  @action
  save() {
    this.count = this.count - 1;
  }

  @action
  update() {
    this.count = this.count + 1;
  }
}
