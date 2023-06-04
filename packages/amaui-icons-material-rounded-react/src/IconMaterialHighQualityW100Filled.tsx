import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighQualityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityW100Filled'

      short_name='HighQuality'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 14.6q.15 0 .25-.1t.1-.25V12.6h2.8v1.65q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-4.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15H7.5V9.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.5q0 .15.1.25t.25.1Zm7.95 1.5q.15 0 .25-.1t.1-.25V14.6h.65q.45 0 .775-.325t.325-.775v-3q0-.45-.325-.775T16.1 9.4h-2q-.45 0-.775.325T13 10.5v3q0 .45.325.775t.775.325h.65v1.15q0 .15.1.25t.25.1Zm-1-2.2q-.15 0-.275-.125-.125-.125-.125-.275v-3q0-.15.125-.275.125-.125.275-.125h2q.15 0 .275.125.125.125.125.275v3q0 .15-.125.275-.125.125-.275.125Zm-9.3 4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialHighQualityW100Filled.displayName = 'AmauiIconMaterialHighQualityW100Filled';

export default IconMaterialHighQualityW100Filled;
