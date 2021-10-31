import { IS_ELECTRON } from '@/constants';
import { openLink } from '@/platform/electron_new';

export default (link: string): void =>
  IS_ELECTRON ? void openLink({ link }) : void window.open(link);
