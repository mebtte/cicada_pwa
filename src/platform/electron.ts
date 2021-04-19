import { IS_ELECTRON } from '../constant';

// eslint-disable-next-line import/no-mutable-exports
let electron: any;

if (IS_ELECTRON) {
  electron = window.require('electron');
}

export default electron;
