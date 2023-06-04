import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerifiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedFilled'

      short_name='Verified'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.7 19.3-2.75-.6q-.375-.075-.6-.388-.225-.312-.175-.687L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.687.225-.313.6-.388l2.75-.6 1.45-2.45q.2-.325.55-.425.35-.1.7.025l2.6 1.1 2.6-1.1q.35-.125.7-.025t.55.425L17.3 4.7l2.75.6q.375.075.6.388.225.312.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.687-.225.313-.6.388l-2.75.6-1.45 2.45q-.2.325-.55.425-.35.1-.7-.025l-2.6-1.1-2.6 1.1q-.35.125-.7.025t-.55-.425Zm3.55-4.45q.275.275.7.275.425 0 .7-.275l4.25-4.25q.3-.3.3-.713 0-.412-.3-.712t-.712-.3q-.413 0-.713.3L10.95 12.7 9.5 11.275q-.3-.275-.712-.263-.413.013-.688.288-.275.275-.275.7 0 .425.275.7Z"/>
    </Icon>
  );
});

IconMaterialVerifiedFilled.displayName = 'AmauiIconMaterialVerifiedFilled';

export default IconMaterialVerifiedFilled;
