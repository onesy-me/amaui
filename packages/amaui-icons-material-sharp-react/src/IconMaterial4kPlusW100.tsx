import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4kPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlusW100'

      short_name='4kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.8 13.85h.7v-1.5H19v-.7h-1.5v-1.5h-.7v1.5h-1.5v.7h1.5Zm-5.125.75h.7v-2.4l2.45 2.4h1.05l-2.75-2.65 2.75-2.55h-1l-2.5 2.35V9.4h-.7ZM6.2 13.1h2.7v1.5h.7v-1.5h1.3v-.7H9.6v-3h-.7v3h-2v-3h-.7Zm-1.9 6.6V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial4kPlusW100.displayName = 'AmauiIconMaterial4kPlusW100';

export default IconMaterial4kPlusW100;
