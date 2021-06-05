import { ORIGINAL_SCROLLBAR_WIDTH } from '@/constants';
import styledScrollbar from './styled_scrollbar';

const scrollbar = ORIGINAL_SCROLLBAR_WIDTH > 0 ? styledScrollbar : null;

export default scrollbar;
