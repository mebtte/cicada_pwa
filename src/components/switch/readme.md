```jsx
import { useState } from 'react';

const Demo = () => {
  const [open, setOpen] = useState(false);

  return <Switch open={open} onChange={setOpen} />;
};

<Demo />;
```

Disabled:

```jsx
import { useState } from 'react';

const Demo = () => {
  const [open, setOpen] = useState(false);

  return <Switch open={open} onChange={setOpen} disabled />;
};

<Demo />;
```

Loading:

```jsx
import { useState } from 'react';

const Demo = () => {
  const [open, setOpen] = useState(false);

  return <Switch open={open} onChange={setOpen} loading={loading} />;
};

<Demo />;
```
