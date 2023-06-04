import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboundFilled'

      short_name='Outbound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.9 16.5 5.1-5.1v2.25h2V8h-5.65v2h2.225L7.5 15.075ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialOutboundFilled.displayName = 'AmauiIconMaterialOutboundFilled';

export default IconMaterialOutboundFilled;
