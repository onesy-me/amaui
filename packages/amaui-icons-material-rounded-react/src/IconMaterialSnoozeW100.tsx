import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnoozeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeW100'

      short_name='Snooze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 15.6h3.375q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.225-.1h-2.975l3.125-3.5q.1-.1.138-.225.037-.125.037-.25 0-.225-.15-.375t-.375-.15h-3.325q-.15 0-.25.1t-.1.25q0 .15.1.25t.225.1h3.025L10.1 14.65q-.1.1-.137.225-.038.125-.038.25 0 .2.137.337.138.138.338.138Zm1.625 5.1q-1.6 0-3-.6t-2.45-1.65Q5.525 17.4 4.925 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45 1.05-1.05 2.45-1.65 1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65 1.05 1.05 1.65 2.45.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45-1.05 1.05-2.45 1.65-1.4.6-3 .6Zm0-7.7ZM3.5 7.275q-.1.1-.237.087-.138-.012-.238-.112Q2.9 7.125 2.9 7t.125-.25L5.8 3.975q.1-.1.238-.088.137.013.237.113.125.125.125.25t-.125.25Zm17.025-.025L17.75 4.475q-.1-.1-.087-.238.012-.137.112-.237.125-.125.25-.125t.25.125l2.775 2.775q.1.1.088.237-.013.138-.113.238-.125.125-.25.125t-.25-.125ZM12.025 20q2.925 0 4.963-2.038 2.037-2.037 2.037-4.962t-2.037-4.963Q14.95 6 12.025 6 9.1 6 7.062 8.037 5.025 10.075 5.025 13q0 2.925 2.037 4.962Q9.1 20 12.025 20Z"/>
    </Icon>
  );
});

IconMaterialSnoozeW100.displayName = 'AmauiIconMaterialSnoozeW100';

export default IconMaterialSnoozeW100;
