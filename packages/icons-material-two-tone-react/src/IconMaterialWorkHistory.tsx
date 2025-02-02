import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistory'

      short_name='WorkHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,8v11h7.08C11.03,18.67,11,18.34,11,18c0-3.87,3.13-7,7-7c0.7,0,1.37,0.1,2,0.29V8H4z" opacity=".3"/><path d="M4,19V8h16v3.29c0.72,0.22,1.4,0.54,2,0.97V8c0-1.11-0.89-2-2-2h-4V4c0-1.11-0.89-2-2-2h-4C8.89,2,8,2.89,8,4v2H4 C2.89,6,2.01,6.89,2.01,8L2,19c0,1.11,0.89,2,2,2h7.68c-0.3-0.62-0.5-1.29-0.6-2H4z M10,4h4v2h-4V4z"/></g><path d="M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M19.65,20.35l-2.15-2.15V15h1v2.79l1.85,1.85 L19.65,20.35z"/></g>
    </Icon>
  );
});

IconMaterialWorkHistory.displayName = 'OnesyIconMaterialWorkHistory';

export default IconMaterialWorkHistory;
