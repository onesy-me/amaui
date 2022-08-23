import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardSharpW100'
      short_name='Forward'

      {...props}
    >
      <path d="M3.775 18.35V15Q3.775 13.2 5.05 11.925Q6.325 10.65 8.125 10.65H18.875L14.625 6.4L15.125 5.9L20.225 11L15.125 16.1L14.625 15.6L18.875 11.35H8.125Q6.6 11.35 5.538 12.412Q4.475 13.475 4.475 15V18.35Z"/>
    </Icon>
  );
});

IconMaterialForwardSharpW100.displayName = 'AmauiIconMaterialForwardSharpW100';

export default IconMaterialForwardSharpW100;
