import { module, test } from 'qunit';
import { setupTest } from 'ember-download-files-app/tests/helpers';
import { render, hbs } from '@ember/test-helpers';

module('Unit | Component | downloadable-files', function (hooks) {
  setupTest(hooks);

  test('it exists', async function (assert) {
    await render(hbs`<DownloadableFiles />`);
    assert.dom('div').hasClass('downloadable-files');
  });

  // test('selectedFiles property should be empty initially', function (assert) {
  //     let component = this.owner.lookup('components:downloadable-files');
  //     assert.deepEqual(component.selectedFiles, []);
  //   });

  window.alert = (message) => {
    assert.ok(
      message.includes('Files available for download with active status'),
    );
    assert.ok(message.includes('Files not available for download'));
  };
});
