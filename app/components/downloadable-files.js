import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
export default class DownloadableFiles extends Component {
  @tracked selectedFiles = [];
  @tracked allSelected = false;
  @tracked showModal = false;
  @tracked modalContent = '';

  get sanitizedModalContent() {
    return htmlSafe(this.modalContent);
  }

  /**
   * This getter property checks if there are any files in the `selectedFiles` array.
   * It returns `true` if the array contains one or more files, and `false` if the array is empty.
   *
   * @property {Boolean} hasSelectedFiles
   * @returns {Boolean}
   */
  get hasSelectedFiles() {
    return this.selectedFiles.length > 0;
  }

  /**
   * This getter property checks whether all the files in the selectedFiles array have a status of 'available'.
   * @property {Boolean} hasAvailableStatus
   * @returns {Boolean}
   */
  get hasAvailableStatus() {
    return this.selectedFiles.every((file) => file.status === 'available');
  }

  /**
   * This getter property is used to indicate a mixed state in a "Select All" checkbox
   * when only some files are selected.
   * @property {Boolean} isIndeterminate
   * @returns {Boolean}
   */
  get isIndeterminate() {
    // Determine if the checkbox should be indeterminate
    //i.e if some, but not all, files are selected
    const result =
      this.selectedFiles.length > 0 &&
      this.selectedFiles.length < this.args.files.length;
    return result;
  }

  @action
  hasThisFile(file) {
    return this.selectedFiles.includes(file);
  }

  /**
   * Toggles the selection state of all files.
   * This method ensures that when the "Select All" checkbox is selected, all files are marked as selected,
   * and when it is deselected, no files are selected.
   *
   * @action
   */

  @action
  toggleSelectAll() {
    this.allSelected = !this.allSelected;
    if (this.allSelected) {
      this.selectedFiles = [...this.args.files];
    } else {
      this.selectedFiles = [];
    }
  }

  /**
   * Toggles the selection state of an individual file.
   *
   * This action is triggered when a user selects or deselects a file from the list using checkbox.
   * It updates the `selectedFiles` array to either add or remove the specified file
   * based on its current selection state.
   *
   * - If the file is currently selected (i.e., it is in `selectedFiles`):
   *   - The file is removed from the `selectedFiles` array.
   * - If the file is not currently selected:
   *   - The file is added to the `selectedFiles` array.
   *
   * @param {Object} file - The file object to toggle in the selection state.
   * @action
   */

  @action
  toggleFileSelection(file) {
    try {
      if (this.selectedFiles.includes(file)) {
        this.selectedFiles = this.selectedFiles.filter((f) => f !== file);
      } else {
        this.selectedFiles = [...this.selectedFiles, file];
      }
      //updates the allSelected state to true if all files are selected by the user.
      //This keeps the "Select All" checkbox in sync with the actual selection state.
      this.allSelected = this.selectedFiles.length === this.args.files.length;
    } catch (error) {
      console.log('error', error);
    }
  }

  /**
   * Initiates the download process for selected files and displays information about
   * their file path and device based on their status in a modal.
   *
   * This action is triggered to do the following tasks:
   * - Filters selected files based on their file status.
   * - Prepares messages about which files can be downloaded and which cannot.
   * - Sets up and displays a modal with detailed information about file device and path.
   *
   * @action
   */
  @action
  downloadSelected() {
    const downloadableFiles = this.selectedFiles.filter(
      (file) => file.status === 'available',
    );
    const nonDownloadableFiles = this.selectedFiles.filter(
      (file) => file.status !== 'available',
    );

    // Create message strings for each group
    const downloadableDetails =
      downloadableFiles.length > 0
        ? `Files available for download with active status:\n${downloadableFiles.map((file) => `Device: ${file.device}, Path: ${file.path}`).join('\n')}`
        : 'No files available for download.';

    const nonDownloadableDetails =
      nonDownloadableFiles.length > 0
        ? `Files not available for download:\n${nonDownloadableFiles.map((file) => `Device: ${file.device}, Path: ${file.path}`).join('\n')}`
        : 'All selected files are available for download.';

    // Set modal content and show the modal
    this.modalContent = `
        <div>
            <p>${downloadableDetails.replace(/\n/g, '<br>')}</p>
            <p>${nonDownloadableDetails.replace(/\n/g, '<br>')}</p>
        </div>
  `;
    this.showModal = true;
    // alert(`${downloadableDetails}\n\n${nonDownloadableDetails}`);
  }

  /**
   * Closes the modal and resets the file selection state.
   *
   *
   * This action is triggered to change the visibility state of a modal component
   * It sets `showModal` to `false`, which typically hides the modal from the user interface.
   */
  @action
  closeModal() {
    this.showModal = false;
    this.resetTableState(); //Reset the table to initial state
  }

  /**
   * Resets the file selection.
   *
   * This action is triggered once the alert modal is closed to
   * clear the selection done by the user.
   */

  @action
  resetTableState() {
    this.selectedFiles = [];
    this.allSelected = false;
  }
}
