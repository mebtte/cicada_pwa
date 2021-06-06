import BranchOutline from './branch_outline';
import CheckboxFill from './checkbox_fill';
import CheckboxOutline from './checkbox_outline';
import CorrectOutline from './correct_outline';
import DownloadOutline from './download_outline';
import EditOutline from './edit_outline';
import GarbageOutline from './garbage_outline';
import InsertOutline from './insert_outline';
import LoadingOutline from './loading_outline';
import MailFill from './mail_fill';
import MoreOutline from './more_outline';
import NextFill from './next_fill';
import NoticeOutline from './notice_outline';
import PictureFill from './picture_fill';
import PlayOutline from './play_outline';
import AddToOutline from './add_to_outline';
import PlusOutline from './plus_outline';
import PreviousFill from './previous_fill';
import QuestionFill from './question_fill';
import RefreshOutline from './refresh_outline';
import SettingOutline from './setting_outline';
import ShieldFill from './shield_fill';
import SortOutline from './sort_outline';
import WrongOutline from './wrong_outline';
import SearchOutline from './search_outline';
import VideoOutline from './video_outline';
import UpOutline from './up_outline';
import DownOutline from './down_outline';
import AimOutline from './aim_outline';
import UploadOutline from './upload_outline';
import OrderedListOutline from './ordered_list_outline';
import ListOutline from './list_outline';
import PlayFill from './play_fill';
import PauseFill from './pause_fill';
import SearchListOutline from './search_list_outline';
import MusicFill from './music_fill';
import FigureFill from './figure_fill';
import MinimizeOutline from './minimize_outline';
import MacOSColorful from './mac_os_colorful';
import WindowsColorful from './windows_colorful';
import ComputerFill from './computer_fill';
import JumpFill from './jump_fill';
import GotoOutline from './goto_outline';
import CmsOutline from './cms_outline';
import LyricOutline from './lyric_outline';
import GithubFill from './github_fill';
import RecommendOutline from './recommend_outline';
import CloudOutline from './cloud_outline';
import BrowserFill from './browser_fill';
import MobilephoneFill from './mobilephone_fill';
import HouseOutline from './house_outline';
import DashboardOutline from './dashboard_outline';
import IDFill from './id_fill';

export enum Name {
  ID_FILL = 'IDFill',
  DASHBOARD_OUTLINE = 'DashboardOutline',
  HOUSE_OUTLINE = 'HouseOutline',
  MOBILEPHONE_FILL = 'MobilephoneFill',
  BROWSER_FILL = 'BrowserFill',
  CLOUD_OUTLINE = 'CloudOutline',
  RECOMMEND_OUTLINE = 'RecommendOutline',
  GITHUB_FILL = 'GithubFill',
  LYRIC_OUTLINE = 'LyricOutline',
  CMS_OUTLINE = 'CmsOutline',
  GOTO_OUTLINE = 'GotoOutline',
  JUMP_FILL = 'JumpFill',
  COMPUTER_FILL = 'ComputerFill',
  WINDOW_COLORFULE = 'WindowsColorful',
  MAC_OS_COLORFULE = 'MacOSColorful',
  MINIMIZE_OUTLINE = 'MinimizeOutline',
  FIGURE_FILL = 'FigureFill',
  MUSIC_FILL = 'MusicFill',
  PLAY_FILL = 'PlayFill',
  PAUSE_FILL = 'PauseFill',
  ADD_TO_OUTLINE = 'AddToOutline',
  LIST_OUTLINE = 'ListOutline',
  ORDERED_LIST_OUTLINE = 'OrderedListOutline',
  UPLOAD_OUTLINE = 'UploadOutline',
  AIM_OUTLINE = 'AimOutline',
  UP_OUTLINE = 'UpOutline',
  DOWN_OUTLINE = 'DownOutline',
  BRANCH_OUTLINE = 'BranchOutline',
  CHECKBOX_OUTLINE = 'CheckboxOutline',
  CHECKBOX_FILL = 'CheckboxFill',
  CORRECT_OUTLINE = 'CorrectOutline',
  DOWNLOAD_OUTLINE = 'DownloadOutline',
  EDIT_OUTLINE = 'EditOutline',
  GARBAGE_OUTLINE = 'GarbageOutline',
  INSERT_OUTLINE = 'InsertOutline',
  LOADING_OUTLINE = 'LoadingOutline',
  MAIL_FILL = 'MailFill',
  MORE_OUTLINE = 'MoreOutline',
  NEXT_FILL = 'NextFill',
  NOTICE_OUTLINE = 'NoticeOutline',
  PICTURE_FILL = 'PictureFill',
  PLAY_OUTLINE = 'PlayOutline',
  PLUS_OUTLINE = 'PlusOutline',
  PREVIOUS_FILL = 'PreviousFill',
  QUESTION_FILL = 'QuestionFill',
  REFRESH_OUTLINE = 'RefreshOutline',
  SEARCH_OUTLINE = 'SearchOutline',
  SETTING_OUTLINE = 'SettingOutline',
  SHIELD_FILL = 'ShieldFill',
  SORT_OUTLINE = 'SortOutline',
  WRONG_OUTLINE = 'WrongOutline',
  VIDEO_OUTLINE = 'VideoOutline',
  SEARCH_LIST_OUTLINE = 'SearchListOutline',
}

export const NAME_MAP_CONTENT: Record<Name, () => JSX.Element> = {
  [Name.ID_FILL]: IDFill,
  [Name.DASHBOARD_OUTLINE]: DashboardOutline,
  [Name.HOUSE_OUTLINE]: HouseOutline,
  [Name.MOBILEPHONE_FILL]: MobilephoneFill,
  [Name.BROWSER_FILL]: BrowserFill,
  [Name.CLOUD_OUTLINE]: CloudOutline,
  [Name.RECOMMEND_OUTLINE]: RecommendOutline,
  [Name.GITHUB_FILL]: GithubFill,
  [Name.LYRIC_OUTLINE]: LyricOutline,
  [Name.CMS_OUTLINE]: CmsOutline,
  [Name.JUMP_FILL]: JumpFill,
  [Name.COMPUTER_FILL]: ComputerFill,
  [Name.WINDOW_COLORFULE]: WindowsColorful,
  [Name.MAC_OS_COLORFULE]: MacOSColorful,
  [Name.MINIMIZE_OUTLINE]: MinimizeOutline,
  [Name.FIGURE_FILL]: FigureFill,
  [Name.MUSIC_FILL]: MusicFill,
  [Name.SEARCH_LIST_OUTLINE]: SearchListOutline,
  [Name.PAUSE_FILL]: PauseFill,
  [Name.PLAY_FILL]: PlayFill,
  [Name.ADD_TO_OUTLINE]: AddToOutline,
  [Name.LIST_OUTLINE]: ListOutline,
  [Name.ORDERED_LIST_OUTLINE]: OrderedListOutline,
  [Name.UPLOAD_OUTLINE]: UploadOutline,
  [Name.AIM_OUTLINE]: AimOutline,
  [Name.DOWN_OUTLINE]: DownOutline,
  [Name.UP_OUTLINE]: UpOutline,
  [Name.BRANCH_OUTLINE]: BranchOutline,
  [Name.CHECKBOX_OUTLINE]: CheckboxOutline,
  [Name.CHECKBOX_FILL]: CheckboxFill,
  [Name.CORRECT_OUTLINE]: CorrectOutline,
  [Name.DOWNLOAD_OUTLINE]: DownloadOutline,
  [Name.EDIT_OUTLINE]: EditOutline,
  [Name.GARBAGE_OUTLINE]: GarbageOutline,
  [Name.INSERT_OUTLINE]: InsertOutline,
  [Name.LOADING_OUTLINE]: LoadingOutline,
  [Name.MAIL_FILL]: MailFill,
  [Name.MORE_OUTLINE]: MoreOutline,
  [Name.NEXT_FILL]: NextFill,
  [Name.NOTICE_OUTLINE]: NoticeOutline,
  [Name.PICTURE_FILL]: PictureFill,
  [Name.PLAY_OUTLINE]: PlayOutline,
  [Name.PLUS_OUTLINE]: PlusOutline,
  [Name.PREVIOUS_FILL]: PreviousFill,
  [Name.QUESTION_FILL]: QuestionFill,
  [Name.REFRESH_OUTLINE]: RefreshOutline,
  [Name.SEARCH_OUTLINE]: SearchOutline,
  [Name.SETTING_OUTLINE]: SettingOutline,
  [Name.SHIELD_FILL]: ShieldFill,
  [Name.SORT_OUTLINE]: SortOutline,
  [Name.WRONG_OUTLINE]: WrongOutline,
  [Name.VIDEO_OUTLINE]: VideoOutline,
  [Name.GOTO_OUTLINE]: GotoOutline,
};
