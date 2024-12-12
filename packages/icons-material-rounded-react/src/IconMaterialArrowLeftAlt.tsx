import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowLeftAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftAlt'

      short_name='ArrowLeftAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m314-440 114 114q12 12 11.5 28T428-270q-12 12-28.5 12.5T371-269L188-452q-12-12-12-28t12-28l183-183q12-12 28.5-11.5T428-690q11 12 11.5 28T428-634L314-520h446q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H314Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftAlt.displayName = 'OnesyIconMaterialArrowLeftAlt';

export default IconMaterialArrowLeftAlt;
