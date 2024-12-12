import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirFreshener = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirFreshener'

      short_name='AirFreshener'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-760q-17 0-28.5-11.5T440-800q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760Zm0-120q-17 0-28.5-11.5T440-920q0-17 11.5-28.5T480-960q17 0 28.5 11.5T520-920q0 17-11.5 28.5T480-880ZM336-80q-64-38-100-102t-36-138q0-81 43-149.5T360-573v-107q0-17 11.5-28.5T400-720h160q17 0 28.5 11.5T600-680v107q73 35 116.5 103.5T760-320q0 74-36 138T624-80H336Zm24-80h240q38-29 59-70.5t21-89.5q0-58-30.5-106.5T566-500l-46-22v-118h-80v118l-46 22q-53 25-83.5 73.5T280-320q0 48 21 89.5t59 70.5Zm-80-680q-17 0-28.5-11.5T240-880q0-17 11.5-28.5T280-920q17 0 28.5 11.5T320-880q0 17-11.5 28.5T280-840Zm400 0q-17 0-28.5-11.5T640-880q0-17 11.5-28.5T680-920q17 0 28.5 11.5T720-880q0 17-11.5 28.5T680-840Zm-320 80q-17 0-28.5-11.5T320-800q0-17 11.5-28.5T360-840q17 0 28.5 11.5T400-800q0 17-11.5 28.5T360-760Zm240 0q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840q17 0 28.5 11.5T640-800q0 17-11.5 28.5T600-760ZM480-320Z"/>
    </Icon>
  );
});

IconMaterialAirFreshener.displayName = 'OnesyIconMaterialAirFreshener';

export default IconMaterialAirFreshener;
