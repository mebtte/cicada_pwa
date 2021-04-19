import api from '.';

function recordDownloadLog({ id, type }) {
  return api.post('/1/music/download_log', {
    withToken: true,
    data: {
      id,
      type,
    },
  });
}

export default recordDownloadLog;
