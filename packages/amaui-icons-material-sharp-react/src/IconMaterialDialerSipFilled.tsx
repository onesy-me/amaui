import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDialerSipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSipFilled'

      short_name='DialerSip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 8V3h1v5Zm-4 0V7h2V6h-2V3h3v1h-2v1h2v3Zm6 0V3h3v3h-2v2Zm1-3h1V4h-1Zm.95 16q-3.225 0-6.287-1.425-3.063-1.425-5.425-3.8-2.363-2.375-3.8-5.438Q3 7.275 3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025-2.85 2.875q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.9-2.9 5 1v5.85q-.25.025-.525.038Q20.2 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialDialerSipFilled.displayName = 'AmauiIconMaterialDialerSipFilled';

export default IconMaterialDialerSipFilled;
