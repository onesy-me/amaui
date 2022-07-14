import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz000RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz000RoundedFilled'
      short_name='BatteryHoriz000'

      {...props}
    >
      <path d="M22 16q0 .425-.288.712Q21.425 17 21 17H5q-.425 0-.713-.288Q4 16.425 4 16v-2H3q-.425 0-.712-.288Q2 13.425 2 13v-2q0-.425.288-.713Q2.575 10 3 10h1V8q0-.425.287-.713Q4.575 7 5 7h16q.425 0 .712.287Q22 7.575 22 8Zm-2-1V9H6v6Z"/>
    </Icon>
  );
});

export default IconMaterialBatteryHoriz000RoundedFilled;
