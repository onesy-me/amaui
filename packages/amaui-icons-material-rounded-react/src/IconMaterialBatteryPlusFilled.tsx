import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryPlusFilled'

      short_name='BatteryPlus'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 856h-80q-17 0-28.5-11.5T520 816q0-17 11.5-28.5T560 776h80v-80q0-17 11.5-28.5T680 656q17 0 28.5 11.5T720 696v80h80q17 0 28.5 11.5T840 816q0 17-11.5 28.5T800 856h-80v80q0 17-11.5 28.5T680 976q-17 0-28.5-11.5T640 936v-80ZM320 976q-17 0-28.5-11.5T280 936V296q0-17 11.5-28.5T320 256h80v-40q0-17 11.5-28.5T440 176h80q17 0 28.5 11.5T560 216v40h80q17 0 28.5 11.5T680 296v280q-100 0-170 70t-70 170q0 45 16 86t45 74H320Z"/>
    </Icon>
  );
});

IconMaterialBatteryPlusFilled.displayName = 'AmauiIconMaterialBatteryPlusFilled';

export default IconMaterialBatteryPlusFilled;
