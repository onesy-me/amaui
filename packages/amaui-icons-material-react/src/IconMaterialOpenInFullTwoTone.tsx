import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInFullTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullTwoTone'
      short_name='OpenInFull'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71"/>
    </Icon>
  );
});

export default IconMaterialOpenInFullTwoTone;
