import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter3W100Filled'

      short_name='Filter3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.35 14.35h2.85q.65 0 1.075-.425.425-.425.425-1.075v-1.7q0-.575-.275-.825T14.85 10q.3-.075.575-.325.275-.25.275-.825v-1.7q0-.65-.425-1.075-.425-.425-1.075-.425h-2.875q-.125 0-.225.1T11 6q0 .15.1.25t.25.1h2.85q.35 0 .575.225Q15 6.8 15 7.15v1.7q0 .35-.225.575-.225.225-.575.225h-1.375q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1h1.35q.35 0 .575.225.225.225.225.575v1.7q0 .35-.225.575-.225.225-.575.225h-2.875q-.125 0-.225.1T11 14q0 .15.1.25t.25.1Zm-3.2 2.35q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.125q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225h10.775q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFilter3W100Filled.displayName = 'AmauiIconMaterialFilter3W100Filled';

export default IconMaterialFilter3W100Filled;
