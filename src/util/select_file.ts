import toast from '../platform/toast';

export default ({
  acceptTypes = [],
  onSelect,
  maxSize = 0,
}: {
  acceptTypes?: string[];
  onSelect: (file: File) => void;
  maxSize?: number;
}) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = acceptTypes.join(',') || '*';
  input.onchange = () => {
    const [file] = Array.from(input.files);
    if (!file) {
      return;
    }
    setTimeout(() => input.remove(), 0);
    if (acceptTypes.length && !acceptTypes.includes(file.type)) {
      return toast.error('不支持的文件类型');
    }
    if (maxSize && maxSize < file.size) {
      return toast.error('文件体积过大');
    }
    return onSelect(file);
  };
  input.click();
};
