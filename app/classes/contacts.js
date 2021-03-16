export default class Contacts {
  constructor(contacts) {
    this.datas = contacts;
  }
  get contacts() {
    return this.datas.filterBy('isDeleted', false);
  }

  get deleteds() {
    return this.datas.filterBy('isDeleted', true);
  }

  get count() {
    return this.deleteds.length;
  }
}
