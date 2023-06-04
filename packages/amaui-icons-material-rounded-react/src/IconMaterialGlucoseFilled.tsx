import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlucoseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseFilled'

      short_name='Glucose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M576 976q-35 0-67-14.5T454 920L250 682q-11-14-9.5-30.5T256 624l18-13q20-15 45-16t46 13l55 35V256q0-17 11.5-28.5T460 216q17 0 28.5 11.5T500 256v360h60V416q0-17 11.5-28.5T600 376q17 0 28.5 11.5T640 416v200h60V456q0-17 11.5-28.5T740 416q17 0 28.5 11.5T780 456v160h60v-80q0-17 11.5-28.5T880 496q17 0 28.5 11.5T920 536v280q0 66-47 113t-113 47H576ZM180 496q-59 0-99.5-40.5T40 358q0-34 13.5-59t63.5-82l33-37q12-14 30-14t30 14l33 38q51 59 64 83t13 57q0 57-41 97.5T180 496Z"/>
    </Icon>
  );
});

IconMaterialGlucoseFilled.displayName = 'AmauiIconMaterialGlucoseFilled';

export default IconMaterialGlucoseFilled;
