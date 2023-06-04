import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoneyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyW100Filled'

      short_name='Money'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 15.35H18v-6.7h-3.65Zm.7-.7v-5.3h2.25v5.3Zm-6.35.7h3.65v-6.7H8.7Zm.7-.7v-5.3h2.25v5.3Zm-3.4.7h.7v-6.7H6ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialMoneyW100Filled.displayName = 'AmauiIconMaterialMoneyW100Filled';

export default IconMaterialMoneyW100Filled;
