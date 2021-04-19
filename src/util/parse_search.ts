export default <T>(search: string) => {
  const query = {};
  const s = search.replace(/\?/g, '');
  if (s) {
    s.split('&').forEach((kv) => {
      const [key, value] = kv.split('=');
      query[key] = decodeURIComponent(value);
    });
  }
  return query as T;
};
