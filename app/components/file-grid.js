import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileGridComponent extends Component {
  @tracked selectedFiles = [];

  @action
  toggleFileSelection(file) {
    if (this.selectedFiles.includes(file)) {
      this.selectedFiles.remove(file);
    } else {
      this.selectedFiles.push(file);
    }
  }

  @action
  toggleSelectAll(event) {
    if (event.target.checked) {
      this.selectedFiles = [...this.args.files];
    } else {
      this.selectedFiles.clear();
    }
  }

  @action
  downloadSelected() {
    // Here you would implement the logic to download selected files
    // For now, just log the selected files
    alert('Download files');
    // In a real app, you might:
    // - Call an API to initiate downloads
    // - Use the Filesystem API if available
    // - Or trigger a download via a blob or data URI
  }
}
