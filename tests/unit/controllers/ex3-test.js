import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | ex3', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:ex3');
    assert.ok(controller);
  });
});
