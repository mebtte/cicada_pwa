import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { ORIGIN } from '@/constant/regexp';
import scrollbar from '@/style/scrollbar';
import Input from '@/component/input';
import dialog from '@/platform/dialog';
import logger from '@/platform/logger';
import {
  relaunch,
  setUIOrigin as setUIOriginRequest,
} from '@/platform/electron_new';
import RouteContainer from '../route_container';
import Header from './header';
import Action from './action';
import { HEADER_HEIGHT, ACTION_HEIGHT } from './constant';

const Style = styled(RouteContainer)`
  ${scrollbar}
  overflow: auto;
  box-sizing: border-box;
  padding: ${HEADER_HEIGHT}px 0 ${ACTION_HEIGHT}px 0;
  background-color: rgba(0, 0, 0, 0.02);
  > .part {
    margin: 20px 0;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    border-radius: 2px;
    background-color: #fff;
    > .label {
      font-size: 12px;
    }
    > .value-wrapper {
      flex: 1;
      text-align: right;
      > .value {
        width: 220px;
        text-align: right;
      }
    }
  }
`;

const Content = ({ uiOrigin: initialUiOrigin }: { uiOrigin: string }) => {
  const [uiOrigin, setUiOrigin] = useState(initialUiOrigin);
  const onUiOriginChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setUiOrigin(event.target.value),
    [],
  );

  const [loading, setLoading] = useState(false);
  const onSave = () =>
    dialog.confirm({
      title: '警告',
      content: '保存配置将会重启客户端, 是否继续?',
      onConfirm: async () => {
        setLoading(true);
        try {
          if (uiOrigin !== initialUiOrigin) {
            if (!ORIGIN.test(uiOrigin)) {
              throw new Error('UI Origin 校验失败');
            } else {
              await setUIOriginRequest({ uiOrigin });
            }
          }
          setTimeout(() => relaunch(), 0);
        } catch (error) {
          logger.error(error, {
            description: '保存桌面客户端配置失败',
            report: true,
          });
          dialog.alert({
            title: '保存配置失败',
            content: error.message,
          });
        }
        setLoading(false);
      },
    });

  return (
    <Style>
      <Header />
      <div className="part">
        <div className="label">UI Origin</div>
        <div className="value-wrapper">
          <Input
            className="value"
            value={uiOrigin}
            onChange={onUiOriginChange}
            disabled={loading}
          />
        </div>
      </div>
      <Action loading={loading} onSave={onSave} />
    </Style>
  );
};

export default Content;
