import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | downloadable-files', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders with no selected files', async function (assert) {
    this.files = [
      { name: 'file1', device: 'Device1', path: '/path1', status: 'available' },
      {
        name: 'file2',
        device: 'Device2',
        path: '/path2',
        status: 'unavailable',
      },
    ];

    await render(hbs`<DownloadableFiles @files={{this.files}} />`);

    assert.dom('.grid-header-controls label').hasText('None Selected');
    assert.dom('.download-btn').hasAttribute('disabled');
  });
});
