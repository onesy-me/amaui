import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEntFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EntFilled'

      short_name='Ent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 976q-17 0-28.5-11.5T240 936V804q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l52 205q5 19-7 34.5T840 696h-80v120q0 33-23.5 56.5T680 896h-80v40q0 17-11.5 28.5T560 976H444l25-240h91q17 0 28.5-11.5T600 696q0-17-11.5-28.5T560 656h-83l5-44q2-15 13-25.5t26-10.5h119q17 0 28.5-11.5T680 536q0-17-11.5-28.5T640 496H522q-47 0-81 31t-39 77l-38 372h-84Z"/>
    </Icon>
  );
});

IconMaterialEntFilled.displayName = 'AmauiIconMaterialEntFilled';

export default IconMaterialEntFilled;
