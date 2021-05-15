import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import format from 'date-fns/format';

import config from '@/config';
import scrollbar from '@/style/scrollbar';
import openLink from '../util/open_link';
import { CICADA_START_YEAR } from '../constant';
import RouteContainer from './route_container';
import Avatar from '../component/avatar';
import CommonHeader from '../component/common_header';
import Tooltip from '../component/tooltip';

const Style = styled(RouteContainer)`
  ${scrollbar}
  overflow: auto;
  > .content {
    padding: 50px 0;
    .link {
      cursor: pointer;
      color: inherit;
      transition: color 0.3s;
    }
    > .description {
      margin: 50px 0;
      text-align: center;
      font-size: 14px;
      > .part {
        margin: 5px 0;
      }
    }
    > .part {
      margin-top: 50px;
      > .label {
        text-align: center;
        font-size: 16px;
      }
      > .content {
        margin-top: 15px;
        > .item {
          margin: 5px 0;
          font-size: 12px;
          color: #888;
          text-align: center;
          .symbol {
            margin: 0 3px;
          }
        }
      }
    }
  }
`;
const logoStyle = {
  display: 'block',
  margin: '0 auto',
};

const About = ({ onlyContent = false }: { onlyContent?: boolean }) => {
  useEffect(() => {
    const linkListener = (event) => {
      const { url } = event.target.dataset;
      if (url) {
        return openLink(url);
      }
    };
    document.addEventListener('click', linkListener);
    return () => document.removeEventListener('click', linkListener);
  }, []);
  return (
    <Style>
      {onlyContent ? null : <CommonHeader />}
      <div className="content">
        <Avatar animated src="/logo.png" size={100} style={logoStyle} />
        <section className="part">
          <div className="content">
            <div className="item">
              <span>知了</span>
              <span className="symbol">@</span>
              <Tooltip
                title={`${config.lastCommitMessage}, ${format(
                  config.buildTime,
                  'yyyyMMddHHmm',
                )}`}
              >
                <span>{config.version}</span>
              </Tooltip>
            </div>
            <div className="item">
              <span>
                {CICADA_START_YEAR}~{new Date().getFullYear()}
              </span>
              <span className="symbol">&copy;</span>
              <span className="link" data-url="https://mebtte.com">
                MEBTTE
              </span>
            </div>
          </div>
        </section>
        <section className="part">
          <div className="label">开发者</div>
          <div className="content">
            <div className="item">
              <span>Logo</span>
              <span className="symbol">@</span>
              <span>
                MJ&nbsp;/&nbsp;雅怡&nbsp;/&nbsp;
                <span className="link" data-url="https://mebtte.com">
                  mebtte
                </span>
              </span>
            </div>
            <div className="item">
              <span className="link" data-url={config.pwaOrigin}>
                Web
              </span>
              <span className="symbol">@</span>
              <span className="link" data-url="https://mebtte.com">
                mebtte
              </span>
            </div>
            <div className="item">
              Android / iOS
              <span className="symbol">@</span>
              <span className="link" data-url="https://github.com/RexHuang1">
                rex
              </span>
              &nbsp;/&nbsp;
              <span className="link" data-url="https://github.com/wubocong">
                wubocong
              </span>
            </div>
            <div className="item">
              <span
                className="link"
                data-url="https://github.com/mebtte/cicada_desktop"
              >
                macOS&nbsp;/&nbsp;Windows
              </span>
              <span className="symbol">@</span>
              <span className="link" data-url="https://mebtte.com">
                mebtte
              </span>
            </div>
          </div>
        </section>
        <section className="part">
          <div className="label">Open Source</div>
          <div className="content">
            {config.dependencies.map((d) => (
              <div key={d} className="item">
                <span
                  className="link"
                  data-url={`https://www.npmjs.com/package/${d}`}
                >
                  {d}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Style>
  );
};

export default connect()(About);
