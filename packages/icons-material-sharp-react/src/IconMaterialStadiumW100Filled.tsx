import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStadiumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiumW100Filled'

      short_name='Stadium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M196-680v-128l128 64-128 64Zm480 0v-128l128 64-128 64Zm-224-32v-128l128 64-128 64Zm-66 594q-59-4-107-12.5T197-151q-34-12-52.5-27T126-210v-320q0-20 26-37t73-29.5q47-12.5 112-20t143-7.5q78 0 143 7.5t112 20q47 12.5 73 29.5t26 37v320q0 17-18.5 32T763-151q-34 12-82 20.5T574-118v-172H386v172Zm94-346q100 0 191.5-17T806-527q-17-26-101.5-47.5T480-596q-140 0-224.5 21.5T154-527q43 29 123 46t203 17Z"/>
    </Icon>
  );
});

IconMaterialStadiumW100Filled.displayName = 'OnesyIconMaterialStadiumW100Filled';

export default IconMaterialStadiumW100Filled;
