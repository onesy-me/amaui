import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusW100Filled'

      short_name='1kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.125 13.85q.15 0 .25-.1t.1-.25v-1.15h1.175q.15 0 .25-.1T19 12q0-.15-.1-.25t-.25-.1h-1.175v-1.175q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v1.15H15.6q-.125 0-.237.1-.113.1-.113.25t.113.25q.112.1.237.1h1.175v1.175q0 .125.1.225t.25.1Zm-5.575.75q.15 0 .25-.1t.1-.25V12.2l2.375 2.325q.05.05.113.062.062.013.112.013.275 0 .35-.213.075-.212-.1-.387l-2.1-2.05L14.8 10q.175-.175.1-.388-.075-.212-.35-.212-.075 0-.137.025-.063.025-.113.075l-2.4 2.25V9.725q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v4.525q0 .125.1.225t.25.1ZM8.1 10.1v4.175q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25v-4.5q0-.15-.1-.25t-.25-.1H6.925q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm-2.3 9.6q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterial1kPlusW100Filled.displayName = 'AmauiIconMaterial1kPlusW100Filled';

export default IconMaterial1kPlusW100Filled;
