import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial9kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='9kPlusW100Filled'

      short_name='9kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.125 13.85q.15 0 .25-.1t.1-.25v-1.15h1.175q.15 0 .25-.1T19 12q0-.15-.1-.25t-.25-.1h-1.175v-1.175q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v1.15H15.6q-.125 0-.237.1-.113.1-.113.25t.113.25q.112.1.237.1h1.175v1.175q0 .125.1.225t.25.1Zm-5.1.75q.15 0 .25-.1t.1-.25V12.2l2.375 2.325q.05.05.113.062.062.013.112.013.275 0 .35-.213.075-.212-.1-.387l-2.1-2.05 2.15-1.95q.175-.175.1-.388-.075-.212-.35-.212-.075 0-.137.025-.063.025-.113.075l-2.4 2.25V9.725q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v4.525q0 .125.1.225t.25.1Zm-5.175 0H9.5q.3 0 .5-.2t.2-.5v-3.8q0-.3-.2-.5t-.5-.2H7.2q-.3 0-.5.2t-.2.5v1.55q0 .3.2.5t.5.2h2.3v1.55H6.825q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm.35-2.95V10.1h2.3v1.55ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterial9kPlusW100Filled.displayName = 'AmauiIconMaterial9kPlusW100Filled';

export default IconMaterial9kPlusW100Filled;
