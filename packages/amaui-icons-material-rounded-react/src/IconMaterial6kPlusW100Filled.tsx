import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kPlusW100Filled'

      short_name='6kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.175 13.85q.15 0 .25-.1t.1-.25v-1.15H18.7q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.175v-1.175q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v1.15H15.65q-.125 0-.237.1-.113.1-.113.25t.113.25q.112.1.237.1h1.175v1.175q0 .125.1.225t.25.1Zm-5.15.75q.15 0 .25-.1t.1-.25V12.2l2.375 2.325q.05.05.113.062.062.013.112.013.275 0 .35-.213.075-.212-.1-.387l-2.1-2.05 2.15-1.95q.175-.175.1-.388-.075-.212-.35-.212-.075 0-.137.025-.063.025-.113.075l-2.4 2.25V9.725q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v4.525q0 .125.1.225t.25.1Zm-4.825 0h2.3q.3 0 .5-.2t.2-.5v-1.55q0-.3-.2-.5t-.5-.2H7.2V10.1h2.675q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1H7.2q-.3 0-.5.2t-.2.5v3.8q0 .3.2.5t.5.2Zm0-.7v-1.55h2.3v1.55Zm-1.4 5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterial6kPlusW100Filled.displayName = 'AmauiIconMaterial6kPlusW100Filled';

export default IconMaterial6kPlusW100Filled;
