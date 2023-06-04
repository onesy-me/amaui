import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalanceW100'

      short_name='Balance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 19.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8V7.825q-.725-.1-1.287-.625-.563-.525-.688-1.35H6.15l2.675 6.8q.1.225.113.512.012.288-.038.463-.275.75-1.025 1.238-.75.487-1.725.487-.975 0-1.725-.487-.75-.488-1.025-1.238-.05-.175-.038-.463.013-.287.113-.512l2.675-6.8h-1.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.025q.125-.825.763-1.413.637-.587 1.562-.587t1.562.587q.638.588.763 1.413h5.025q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.5l2.675 6.8q.1.225.113.512.012.288-.038.463-.275.75-1.025 1.238-.75.487-1.725.487-.975 0-1.725-.487-.75-.488-1.025-1.238-.05-.175-.038-.463.013-.287.113-.512l2.675-6.8h-3.525q-.125.825-.687 1.35-.563.525-1.288.625V19.15h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM15.8 13h4.1l-2.05-5.275ZM4.1 13h4.1L6.15 7.725ZM12 7.15q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163Q12.675 3.85 12 3.85t-1.162.487q-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488Z"/>
    </Icon>
  );
});

IconMaterialBalanceW100.displayName = 'AmauiIconMaterialBalanceW100';

export default IconMaterialBalanceW100;
