import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryPlus'

      short_name='BatteryPlus'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 976q-17 0-28.5-11.5T280 936V296q0-17 11.5-28.5T320 256h80v-40q0-17 11.5-28.5T440 176h80q17 0 28.5 11.5T560 216v40h80q17 0 28.5 11.5T680 296v280q-21 0-41 3.5T600 590V336H360v560h94q8 23 19.5 43t27.5 37H320Zm40-80h94-14 14-94Zm280-40h-80q-17 0-28.5-11.5T520 816q0-17 11.5-28.5T560 776h80v-80q0-17 11.5-28.5T680 656q17 0 28.5 11.5T720 696v80h80q17 0 28.5 11.5T840 816q0 17-11.5 28.5T800 856h-80v80q0 17-11.5 28.5T680 976q-17 0-28.5-11.5T640 936v-80Z"/>
    </Icon>
  );
});

IconMaterialBatteryPlus.displayName = 'AmauiIconMaterialBatteryPlus';

export default IconMaterialBatteryPlus;
