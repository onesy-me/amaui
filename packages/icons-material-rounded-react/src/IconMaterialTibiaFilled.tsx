import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTibiaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaFilled'

      short_name='Tibia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-592-85-85q-17-17-26-39t-9-45q0-50 34.5-84.5T358-880h244q49 0 83 34.5t34 83.5q0 25-10 47.5T682-675l-82 82v222l84 84q17 17 26.5 39t9.5 46q0 51-35 86t-86 35q-24 0-46-9t-39-26q-7-8-15.5-11.5T480-131q-10 0-18.5 4T446-116q-17 17-39 26t-46 9q-51 0-86-35t-35-86q0-24 9-46t26-39l85-83v-222Z"/>
    </Icon>
  );
});

IconMaterialTibiaFilled.displayName = 'OnesyIconMaterialTibiaFilled';

export default IconMaterialTibiaFilled;
