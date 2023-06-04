import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2kPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kPlusFilled'

      short_name='2kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 14h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5ZM11 15h1.5v-2.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11Zm-5 0h4v-1.5H7.5v-1H10V9H6v1.5h2.5v1H6Zm-3 6V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial2kPlusFilled.displayName = 'AmauiIconMaterial2kPlusFilled';

export default IconMaterial2kPlusFilled;
