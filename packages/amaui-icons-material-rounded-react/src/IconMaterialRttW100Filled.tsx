import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRttW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RttW100Filled'

      short_name='Rtt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.125 20.05q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.05l2.3-14.75H11.7q-.3 0-.512.187-.213.188-.263.488l-.55 3.525q-.025.125-.125.212-.1.088-.225.088-.15 0-.263-.125-.112-.125-.087-.275l.55-3.525q.1-.55.5-.913.4-.362.975-.362h7.975q.7 0 1.15.525.45.525.325 1.2L20.675 8.8q-.025.125-.125.212-.1.088-.225.088-.15 0-.263-.125-.112-.125-.087-.275l.5-3.175q.05-.35-.175-.638-.225-.287-.6-.287h-3.525l-2.3 14.75h1.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-6.45-13.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H8.65l-.1.7Zm-.6 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H8.05l-.1.7Zm-1.1 8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.2l-.1.7Zm.65-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.2l-.1.7Z"/>
    </Icon>
  );
});

IconMaterialRttW100Filled.displayName = 'AmauiIconMaterialRttW100Filled';

export default IconMaterialRttW100Filled;
