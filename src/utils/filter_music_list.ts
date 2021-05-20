import { Music } from '../constants/music';

function filterMusic(keyword: string) {
  return (music: Music) => {
    const { name, alias, singers } = music;
    if (
      name.toLowerCase().indexOf(keyword) > -1 ||
      alias.toLowerCase().indexOf(keyword) > -1
    ) {
      return true;
    }
    for (const singer of singers) {
      const { name: singerName, alias: singerAlias } = singer;
      if (
        singerName.toLowerCase().indexOf(keyword) > -1 ||
        singerAlias.toLowerCase().indexOf(keyword) > -1
      ) {
        return true;
      }
    }
    return false;
  };
}

export default <T extends Music>(musicList: T[], keyword) =>
  musicList.filter(filterMusic(keyword));
