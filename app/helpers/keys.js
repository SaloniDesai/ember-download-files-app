import { helper } from '@ember/component/helper';

export default helper(function keys([object]) {
  if (typeof object === 'object' && object !== null) {
    return Object.keys(object).map(
      (key) => key.charAt(0).toUpperCase() + key.slice(1),
    );
  }
  return [];
});
