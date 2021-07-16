import React, { useState, useCallback, useEffect } from 'react';
import JSONView from 'react-json-view';

import Dialog, { Content } from '@/components/dialog';
import useHistory from '@/utils/use_history';
import { Query } from './constants';

const bodyProps = {
  style: { width: 650 },
};

const JsonViewDialog = ({ jsonString }: { jsonString?: string }) => {
  const history = useHistory();
  const onClose = useCallback(
    () =>
      history.push({
        query: {
          [Query.JSON_VIEW_STRING]: '',
        },
      }),
    [history],
  );

  const [json, setJson] = useState({});
  useEffect(() => {
    if (jsonString) {
      setJson(JSON.parse(jsonString));
    }
  }, [jsonString]);
  return (
    <Dialog open={!!jsonString} onClose={onClose} bodyProps={bodyProps}>
      <Content>
        <JSONView src={json} />
      </Content>
    </Dialog>
  );
};

export default React.memo(JsonViewDialog);
