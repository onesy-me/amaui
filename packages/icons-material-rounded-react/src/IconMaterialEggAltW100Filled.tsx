import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEggAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggAltW100Filled'

      short_name='EggAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-132q-54 0-81.5-19.5T512-191q-23-25-47-43t-66-18q-37 0-83.5-13.5t-87-43Q188-338 160-385t-28-114q0-139 71-234t196-95q56 0 96.5 16t70 41.5Q595-745 617-714t40 60q16 26 31.5 49t34.5 42q53 53 79 91t26 113q0 97-58.5 162T640-132ZM480-392q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialEggAltW100Filled.displayName = 'OnesyIconMaterialEggAltW100Filled';

export default IconMaterialEggAltW100Filled;
