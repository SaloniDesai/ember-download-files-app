import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-download-files-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | keys', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('inputObject', {
      name: 'file1',
      device: 30,
      status: 'available',
    });

    await render(
      hbs`{{#each (keys this.inputObject) as |key|}}{{key}}{{/each}}`,
    );

    assert.dom().hasText('NameDeviceStatus');
  });
});
