import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Draft'

      short_name='Draft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-440H560q-17 0-28.5-11.5T520-640ZM240-800v200-200 640-640Z"/>
    </Icon>
  );
});

IconMaterialDraft.displayName = 'OnesyIconMaterialDraft';

export default IconMaterialDraft;
