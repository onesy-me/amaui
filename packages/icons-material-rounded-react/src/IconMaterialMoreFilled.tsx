import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreFilled'

      short_name='More'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200q-20 0-37.5-9T294-234L153-434q-15-21-15-46t15-46l141-200q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm20-240q17 0 28.5-11.5T420-480q0-17-11.5-28.5T380-520q-17 0-28.5 11.5T340-480q0 17 11.5 28.5T380-440Zm140 0q17 0 28.5-11.5T560-480q0-17-11.5-28.5T520-520q-17 0-28.5 11.5T480-480q0 17 11.5 28.5T520-440Zm140 0q17 0 28.5-11.5T700-480q0-17-11.5-28.5T660-520q-17 0-28.5 11.5T620-480q0 17 11.5 28.5T660-440Z"/>
    </Icon>
  );
});

IconMaterialMoreFilled.displayName = 'OnesyIconMaterialMoreFilled';

export default IconMaterialMoreFilled;
