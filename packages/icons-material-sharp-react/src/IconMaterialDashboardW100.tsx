import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDashboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardW100'

      short_name='Dashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-600v-188h242v188H546ZM172-492v-296h242v296H172Zm374 320v-296h242v296H546Zm-374 0v-188h242v188H172Zm28-348h186v-240H200v240Zm374 320h186v-240H574v240Zm0-428h186v-132H574v132ZM200-200h186v-132H200v132Zm186-320Zm188-108Zm0 188ZM386-332Z"/>
    </Icon>
  );
});

IconMaterialDashboardW100.displayName = 'OnesyIconMaterialDashboardW100';

export default IconMaterialDashboardW100;
