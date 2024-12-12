import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextIncreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncreaseFilled'

      short_name='TextIncrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m40-200 210-560h100l210 560h-96l-51-143H187l-51 143H40Zm176-224h168l-82-232h-4l-82 232Zm504 104v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/>
    </Icon>
  );
});

IconMaterialTextIncreaseFilled.displayName = 'OnesyIconMaterialTextIncreaseFilled';

export default IconMaterialTextIncreaseFilled;
