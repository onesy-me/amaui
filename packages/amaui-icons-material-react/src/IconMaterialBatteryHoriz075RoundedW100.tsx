import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz075RoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz075RoundedW100'
      short_name='BatteryHoriz075'

      {...props}
    >
      <path d="M20.45 15.1q0 .325-.212.537-.213.213-.538.213H5.825q-.325 0-.538-.213-.212-.212-.212-.537v-1.5h-.75q-.325 0-.537-.213-.213-.212-.213-.537v-1.7q0-.325.213-.538.212-.212.537-.212h.75V8.9q0-.325.212-.538.213-.212.538-.212H19.7q.325 0 .538.212.212.213.212.538Zm-10.725.05v-6.3H5.75v6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz075RoundedW100.displayName = 'AmauiIconMaterialBatteryHoriz075RoundedW100';

export default IconMaterialBatteryHoriz075RoundedW100;
