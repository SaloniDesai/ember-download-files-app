import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Unit | Component | downloadable-files', function (hooks) {
  setupRenderingTest(hooks);

  const testFiles = [
    {
      id: 1,
      name: 'file1',
      status: 'available',
      device: 'dev1',
      path: '/path1',
    },
    {
      id: 2,
      name: 'file2',
      status: 'unavailable',
      device: 'dev2',
      path: '/path2',
    },
  ];

  test('it selects and deselects files', async function (assert) {
    this.set('files', testFiles);
    await render(hbs`<DownloadableFiles @files={{this.files}} />`);

    // Check if initially no files are selected
    assert.dom('.grid-item input').isNotChecked();

    // Select a file
    await fillIn('.grid-item input', 'true');
    assert.dom('.grid-header-controls label').hasText('Selected 1');

    // Deselect the file
    await fillIn('.grid-item input', 'false');
    assert.dom('.grid-header-controls label').hasText('None Selected');
  });

  test('it enables the download button when files are selected', async function (assert) {
    this.set('files', testFiles);

    await render(hbs`<DownloadableFiles @files={{this.files}} />`);

    // Click on the file to select it
    await click('input.select-box');

    // Assert that the download button is enabled when files are selected
    assert
      .dom('.download-btn')
      .doesNotHaveAttribute(
        'disabled',
        'Button is enabled when files are selected',
      );
  });

  window.alert = (message, assert) => {
    assert.ok(
      message.includes('Files available for download with active status'),
    );
    assert.ok(message.includes('Files not available for download'));
  };
});
