import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCelebrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CelebrationFilled'

      short_name='Celebration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21.3q-.6.2-1.05-.25Q2.5 20.6 2.7 20l3.225-9.025q.375-1.05 1.45-1.287 1.075-.238 1.85.537l4.55 4.55q.775.775.537 1.85-.237 1.075-1.287 1.45Zm10.025-9.275Q13.8 11.8 13.8 11.5q0-.3.225-.525L19.1 5.9q.8-.8 1.925-.8t1.925.8l.1.1q.2.2.2.5t-.225.525q-.225.225-.525.225-.3 0-.525-.225L21.9 6.95q-.35-.35-.875-.35t-.875.35l-5.1 5.1q-.2.2-.5.2t-.525-.225Zm-4-4Q9.8 7.8 9.8 7.5q0-.3.225-.525L10.1 6.9q.35-.35.35-.85t-.35-.85l-.15-.15q-.2-.2-.2-.5t.225-.525Q10.2 3.8 10.5 3.8q.3 0 .525.225l.125.125q.8.8.8 1.9 0 1.1-.8 1.9l-.1.1q-.2.2-.5.2t-.525-.225Zm2 2Q11.8 9.8 11.8 9.5q0-.3.225-.525L15.1 5.9q.35-.35.35-.875t-.35-.875L14 3.05q-.2-.2-.2-.5t.225-.525q.225-.225.525-.225.3 0 .525.225L16.15 3.1q.8.8.8 1.925t-.8 1.925l-3.1 3.1q-.2.2-.5.2t-.525-.225Zm4 4Q15.8 13.8 15.8 13.5q0-.3.225-.525L17.1 11.9q.8-.8 1.925-.8t1.925.8l1.1 1.1q.2.2.2.5t-.225.525q-.225.225-.525.225-.3 0-.525-.225L19.9 12.95q-.35-.35-.875-.35t-.875.35l-1.1 1.1q-.2.2-.5.2t-.525-.225Z"/>
    </Icon>
  );
});

IconMaterialCelebrationFilled.displayName = 'AmauiIconMaterialCelebrationFilled';

export default IconMaterialCelebrationFilled;
