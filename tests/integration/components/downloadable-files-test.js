import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-download-files-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | downloadable-files', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DownloadableFiles />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DownloadableFiles>
        template block text
      </DownloadableFiles>
    `);

    assert.dom().hasText('template block text');
  });
});
