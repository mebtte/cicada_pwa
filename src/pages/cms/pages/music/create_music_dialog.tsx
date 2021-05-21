import React, { useState } from 'react';
import styled from 'styled-components';

import Select from '@/components/select';
import cmsCreateMusic from '@/apis/cms_create_music';
import toast from '@/platform/toast';
import logger from '@/platform/logger';
import selectFile from '@/utils/select_file';
import {
  MusicType,
  MUSIC_TYPE_MAP_LABEL,
  NAME_MAX_LENGTH,
  MUSIC_NORMAL,
} from '@/constants/music';
import Label from '@/components/label';
import Input from '@/components/input';
import useHistory from '@/utils/use_history';
import Dialog, { Title, Content, Action } from '@/components/dialog';
import Button, { Type } from '@/components/button';
import useQuery from '@/utils/use_query';
import { Query, Figure } from './constants';
import SingerListSelector from './singer_list_selector';

const MUSIC_TYPES = Object.keys(MUSIC_TYPE_MAP_LABEL).map(
  (t) => +t,
) as MusicType[];
const musicTypeItemRenderer = (musicType: MusicType, filter: string) => {
  const target = MUSIC_TYPE_MAP_LABEL[musicType];
  if (target.includes(filter)) {
    return target;
  }
  return null;
};
const FileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    flex: 1;
    min-width: 0;
  }
`;
const labelStyle = {
  marginBottom: 20,
};
const inputStyle = {
  width: '100%',
};

const CreateMusicDialog = () => {
  const history = useHistory();
  const query = useQuery<{ [key in Query]?: string }>();
  const open = !!query[Query.CREATE_MUSIC_DIALOG_OPEN];

  const [singerList, setSingerList] = useState<Figure[]>([]);
  const onSingerSelect = (singer: Figure) =>
    setSingerList((sl) => {
      const exist = sl.find((s) => s.id === singer.id);
      if (exist) {
        return sl;
      }
      return [...sl, singer];
    });
  const onSingerRemove = (singer: Figure) =>
    setSingerList((sl) => sl.filter((s) => s.id !== singer.id));

  const [name, setName] = useState('');
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const [musicType, setMusicType] = useState<MusicType>(MusicType.NORMAL);
  const onMusicTypeChange = (t: MusicType) => setMusicType(t);

  const [file, setFile] = useState<File | null>(null);
  const onSelectFile = () =>
    selectFile({
      acceptTypes: MUSIC_NORMAL.ACCEPT_MIMES,
      onSelect: (f) => {
        if (!MUSIC_NORMAL.ACCEPT_MIMES.includes(f.type)) {
          return toast.error(
            `不支持的文件类型, 支持的文件类型为 ${MUSIC_NORMAL.ACCEPT_MIMES.join(
              ',',
            )}`,
          );
        }
        if (f.size > MUSIC_NORMAL.MAX_SIZE) {
          return toast.error(
            `文件过大, 最大不超过 ${MUSIC_NORMAL.MAX_SIZE / 1024 / 1024}MB`,
          );
        }
        return setFile(f);
      },
    });

  const onClose = () => {
    history.push({
      query: {
        [Query.CREATE_MUSIC_DIALOG_OPEN]: '',
      },
    });
    setTimeout(() => {
      setSingerList([]);
      setName('');
      setFile(null);
    }, 1000);
  };

  const [loading, setLoading] = useState(false);
  const onCreate = async () => {
    if (!singerList.length) {
      return toast.error('请选择歌手列表');
    }
    if (!name) {
      return toast.error('请输入音乐名字');
    }
    if (!file) {
      return toast.error('请选择音乐文件');
    }
    setLoading(true);
    try {
      await cmsCreateMusic({
        singerIdList: singerList.map((s) => s.id),
        name,
        type: musicType,
        file,
      });
      toast.success(`音乐"${name}"已创建`);
      onClose();
    } catch (error) {
      logger.error(error, { description: '创建音乐失败', report: true });
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open}>
      <Title>创建音乐</Title>
      <Content>
        <SingerListSelector
          style={labelStyle}
          singerList={singerList}
          onSingerSelect={onSingerSelect}
          onSingerRemove={onSingerRemove}
        />
        <Label label="音乐名" style={labelStyle}>
          <Input
            value={name}
            onChange={onNameChange}
            placeholder={`最长不超过 ${NAME_MAX_LENGTH} 个字符`}
            maxLength={NAME_MAX_LENGTH}
            disabled={loading}
            style={inputStyle}
          />
        </Label>
        <Label label="音乐类型" style={labelStyle}>
          <Select
            value={musicType}
            onChange={onMusicTypeChange}
            array={MUSIC_TYPES}
            itemRenderer={musicTypeItemRenderer}
          />
        </Label>
        <Label label="音乐文件" style={labelStyle}>
          <FileBox>
            <Button
              label="选取文件"
              type={Type.PRIMARY}
              onClick={onSelectFile}
            />
            {file ? <Input value={file.name} disabled /> : null}
          </FileBox>
        </Label>
      </Content>
      <Action>
        <Button label="取消" onClick={onClose} disabled={loading} />
        <Button
          label="创建"
          type={Type.PRIMARY}
          onClick={onCreate}
          loading={loading}
        />
      </Action>
    </Dialog>
  );
};

export default CreateMusicDialog;
