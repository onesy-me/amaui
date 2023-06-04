import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kW100Filled'

      short_name='2k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.2 14.6q.15 0 .25-.1t.1-.25V12.2l2.375 2.325q.05.05.113.062.062.013.112.013.275 0 .35-.213.075-.212-.1-.387l-2.1-2.05L16.45 10q.175-.175.1-.388-.075-.212-.35-.212-.075 0-.138.025-.062.025-.112.075l-2.4 2.25V9.725q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v4.525q0 .125.1.225t.25.1Zm-5.5 0h2.675q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1H7.7v-1.55H10q.3 0 .5-.2t.2-.5V10.1q0-.3-.2-.5t-.5-.2H7.325q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1H10v1.55H7.7q-.3 0-.5.2t-.2.5v1.55q0 .275.213.487.212.213.487.213Zm-1.9 5.1q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterial2kW100Filled.displayName = 'AmauiIconMaterial2kW100Filled';

export default IconMaterial2kW100Filled;
