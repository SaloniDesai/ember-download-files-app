import { setupTest } from 'ember-download-files-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | file data', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('file-data', {});
    assert.ok(model, 'model exists');
  });
});
