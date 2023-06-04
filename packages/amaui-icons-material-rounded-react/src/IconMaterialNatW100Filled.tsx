import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatW100Filled'

      short_name='Nat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.375 14.35q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.875 0 1.537.562.663.563.813 1.438h3.8v.7h-3.8q-.15.875-.813 1.437-.662.563-1.537.563Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163-.488-.487-1.163-.487t-1.162.487q-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488Zm1.5 7.05q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1q3.275-.125 5.463-2.375 2.187-2.25 2.187-5.625t-2.187-5.625Q9.15 4.125 5.875 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1q3.6.125 5.937 2.562Q14.15 8.3 14.225 11.65h6.4l-2-2q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.325 2.325q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l2-2h-6.4q-.075 3.35-2.413 5.787-2.337 2.438-5.937 2.563Z"/>
    </Icon>
  );
});

IconMaterialNatW100Filled.displayName = 'AmauiIconMaterialNatW100Filled';

export default IconMaterialNatW100Filled;
