import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyW100Filled'

      short_name='Key'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 13.5q.625 0 1.062-.438Q8.5 12.625 8.5 12t-.438-1.062Q7.625 10.5 7 10.5t-1.062.438Q5.5 11.375 5.5 12t.438 1.062Q6.375 13.5 7 13.5Zm0 2.85q-1.85 0-3.1-1.25T2.65 12q0-1.85 1.25-3.1T7 7.65q1.6 0 2.762.9 1.163.9 1.438 2.1h8.925q.15 0 .288.05.137.05.262.175l.6.6q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-1.2 1.225q-.1.1-.225.15-.125.05-.25.075-.125.025-.262-.025-.138-.05-.263-.125l-1.05-.8L16.65 14q-.1.075-.2.112-.1.038-.225.038T16 14.112q-.1-.037-.2-.087l-1-.675h-3.6q-.275 1.2-1.438 2.1-1.162.9-2.762.9Z"/>
    </Icon>
  );
});

IconMaterialKeyW100Filled.displayName = 'AmauiIconMaterialKeyW100Filled';

export default IconMaterialKeyW100Filled;
