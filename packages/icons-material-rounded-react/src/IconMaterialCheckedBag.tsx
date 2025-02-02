import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckedBag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBag'

      short_name='CheckedBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm120-160q-33 0-56.5-23.5T160-360v-280q0-33 23.5-56.5T240-720h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-640v280q0 33-23.5 56.5T720-280H240Zm440-80h40v-280h-40v280ZM420-720h120q0-26-17-43t-43-17q-26 0-43 17t-17 43ZM280-360v-280h-40v280h40Zm60-280v280h280v-280H340Zm-60 280h60-60Zm400 0h-60 60Zm-400 0h-40 40Zm60 0h280-280Zm340 0h40-40Z"/>
    </Icon>
  );
});

IconMaterialCheckedBag.displayName = 'OnesyIconMaterialCheckedBag';

export default IconMaterialCheckedBag;
