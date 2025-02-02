import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPillW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillW100'

      short_name='Pill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M345-172q-72 0-122.5-50.5T172-345q0-35 13.5-67t37.5-56l269-269q24-24 56-37.5t67-13.5q72 0 122.5 50.5T788-615q0 35-13.5 67T737-492L468-223q-24 24-56 37.5T345-172Zm248-216 125-124q20-20 31-47t11-56q0-60-42.5-102.5T615-760q-29 0-56 11t-47 31L388-593l205 205ZM345-200q29 0 56-11t47-31l124-125-205-205-125 124q-20 20-31 47t-11 56q0 60 42.5 102.5T345-200Z"/>
    </Icon>
  );
});

IconMaterialPillW100.displayName = 'OnesyIconMaterialPillW100';

export default IconMaterialPillW100;
