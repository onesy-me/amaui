import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoneyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyFilled'

      short_name='Money'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16h5V8h-5Zm2-2v-4h1v4Zm-8 2h5V8H8Zm2-2v-4h1v4Zm-5 2h2V8H5Zm-3 4V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialMoneyFilled.displayName = 'AmauiIconMaterialMoneyFilled';

export default IconMaterialMoneyFilled;
