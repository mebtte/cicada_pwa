```jsx
import { useState, useCallback } from 'react';

const Demo = () => {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  return (
    <>
      <button type="button" onClick={onOpen}>
        open
      </button>
      <Popup
        open={open}
        onClose={onClose}
        bodyProps={{ style: { height: 200 } }}
      >
        content
      </Popup>
    </>
  );
};

<Demo />;
```
