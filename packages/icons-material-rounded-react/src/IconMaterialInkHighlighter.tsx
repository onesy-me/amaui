import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkHighlighter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighter'

      short_name='InkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M544-400 440-504 240-304l104 104 200-200Zm-47-161 104 104 199-199-104-104-199 199Zm-84-28 216 216-229 229q-24 24-56 24t-56-24l-2-2-3 3q-11 11-25.5 17t-30.5 6H108q-14 0-19-12t5-22l92-92-2-2q-24-24-24-56t24-56l229-229Zm0 0 227-227q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L629-373 413-589Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighter.displayName = 'OnesyIconMaterialInkHighlighter';

export default IconMaterialInkHighlighter;
