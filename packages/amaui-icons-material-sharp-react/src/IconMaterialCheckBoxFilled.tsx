import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxFilled'

      short_name='CheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.6 16.2 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxFilled.displayName = 'AmauiIconMaterialCheckBoxFilled';

export default IconMaterialCheckBoxFilled;
