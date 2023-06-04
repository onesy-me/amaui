import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFramePersonOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOffFilled'

      short_name='FramePersonOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m818 1028-52-52H640v-80h46l-80-80H240v-76q0-21 10.5-39.5T279 671q31-18 64.5-30.5T412 622L160 370v46H80V290l-54-54 57-57 792 792-57 57ZM600 456q0 26-10.5 48.5T562 544L392 374q17-17 39.5-27.5T480 336q50 0 85 35t35 85Zm280 280v126l-80-80v-46h80ZM80 976V736h80v160h160v80H80Zm720-560V256H640v-80h240v240h-80ZM320 176v80h-46l-80-80h126Z"/>
    </Icon>
  );
});

IconMaterialFramePersonOffFilled.displayName = 'AmauiIconMaterialFramePersonOffFilled';

export default IconMaterialFramePersonOffFilled;
