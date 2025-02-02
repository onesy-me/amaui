import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatFlatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatW100'

      short_name='AirlineSeatFlat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M388-452v-176h412v176H388Zm28-148v120-120ZM160-344v-28h640v28H160Zm74-108q-32 0-53-21t-21-53q0-32 21-53t53-21q32 0 53 21t21 53q0 32-21 53t-53 21Zm0-28q19.55 0 32.77-13.23Q280-506.45 280-526q0-19.55-13.23-32.78Q253.55-572 234-572q-19.55 0-32.77 13.22Q188-545.55 188-526t13.23 32.77Q214.45-480 234-480Zm182 0h356v-120H416v120Zm-182-46Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatW100.displayName = 'OnesyIconMaterialAirlineSeatFlatW100';

export default IconMaterialAirlineSeatFlatW100;
