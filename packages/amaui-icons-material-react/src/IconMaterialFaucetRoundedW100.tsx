import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFaucetRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaucetRoundedW100'
      short_name='Faucet'

      {...props}
    >
      <path d="M3.5 14.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.65v-1.5q0-.35-.225-.575-.225-.225-.575-.225h-1.6q-.15 0-.25-.1T5.4 11q0-.15.1-.25t.25-.1h1.6q.625 0 1.062.437.438.438.438 1.063v1.5h2.8V6.6q0-1.45 1.013-2.463 1.012-1.012 2.437-.987.975 0 1.813.512.837.513 1.262 1.388l.7 1.4q.05.125 0 .262-.05.138-.175.213-.125.075-.262.013-.138-.063-.213-.188l-.7-1.4q-.35-.7-1-1.1-.65-.4-1.425-.4-1.15 0-1.95.8t-.8 1.95v7.05h2.8v-1.5q0-.625.438-1.063.437-.437 1.062-.437h1.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.6q-.35 0-.575.225-.225.225-.225.575v1.5h4.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3.15 5.5q-.625 0-1.062-.437-.438-.438-.438-1.063v-4h.7v4q0 .35.225.575.225.225.575.225h10.7q.35 0 .575-.225.225-.225.225-.575v-4h.7v4.15q0 .575-.388.962-.387.388-.962.388Z"/>
    </Icon>
  );
});

IconMaterialFaucetRoundedW100.displayName = 'AmauiIconMaterialFaucetRoundedW100';

export default IconMaterialFaucetRoundedW100;
