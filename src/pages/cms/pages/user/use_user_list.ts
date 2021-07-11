import { useCallback, useEffect, useState } from 'react';

import cmsGetUserList from '@/apis/cms_get_user_list';
import { User } from './constants';
import eventemitter, { EventType } from './eventemitter';

export default () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);
  const getUserList = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const ul = await cmsGetUserList();
      setUserList(ul);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getUserList();

    eventemitter.on(EventType.USER_CREATED, getUserList);
    eventemitter.on(EventType.USER_UPDATED, getUserList);
    return () => {
      eventemitter.off(EventType.USER_CREATED, getUserList);
      eventemitter.off(EventType.USER_UPDATED, getUserList);
    };
  }, [getUserList]);

  return { error, loading, userList, retry: getUserList };
};
