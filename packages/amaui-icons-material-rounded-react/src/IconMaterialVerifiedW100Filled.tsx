import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerifiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedW100Filled'

      short_name='Verified'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.55 18.15-2.4-.5q-.275-.05-.437-.3-.163-.25-.138-.525L4.8 14.35 3.175 12.5q-.2-.2-.2-.5t.2-.5L4.8 9.65l-.225-2.475q-.025-.275.138-.525.162-.25.437-.3l2.4-.5 1.275-2.125q.15-.25.4-.35.25-.1.525.025l2.25.95 2.25-.95q.275-.125.525-.025t.4.35L16.45 5.85l2.4.5q.275.05.438.3.162.25.137.525L19.2 9.65l1.625 1.85q.2.2.2.5t-.2.5L19.2 14.35l.225 2.475q.025.275-.137.525-.163.25-.438.3l-2.4.5-1.275 2.125q-.15.25-.4.35-.25.1-.525-.025L12 19.65l-2.25.95q-.275.125-.525.025t-.4-.35Zm2.875-4.025q.225.225.525.225.3 0 .525-.225l4-4q.1-.1.087-.238-.012-.137-.112-.237-.125-.125-.25-.125t-.25.125l-4 4-1.925-1.925q-.1-.1-.237-.088-.138.013-.238.113-.125.125-.125.25t.125.25Z"/>
    </Icon>
  );
});

IconMaterialVerifiedW100Filled.displayName = 'AmauiIconMaterialVerifiedW100Filled';

export default IconMaterialVerifiedW100Filled;
