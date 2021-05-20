import { ORIGINAL_SCROLLBAR_WIDTH } from '@/constants';
import styledScrollbar from './styled_scrollbar';

export default ORIGINAL_SCROLLBAR_WIDTH > 0 ? styledScrollbar : null;
