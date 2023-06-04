import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbIridescent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIridescent'

      short_name='WbIridescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 11h10v2H7z" opacity=".3"/><path d="M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-10h2v3h-2zm6.25 4.39l1.41 1.41 1.8-1.79-1.42-1.41zM11 20h2v3h-2zm6.24-1.29l1.79 1.8 1.42-1.42-1.8-1.79zM5.34 6.805l-1.788-1.79L4.96 3.61l1.788 1.788zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z"/>
    </Icon>
  );
});

IconMaterialWbIridescent.displayName = 'AmauiIconMaterialWbIridescent';

export default IconMaterialWbIridescent;
