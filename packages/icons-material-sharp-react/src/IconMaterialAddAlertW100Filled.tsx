import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAlertW100Filled'

      short_name='AddAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q75 13 124.5 71T688-568v328h60v28H212Zm267.82 100q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM466-380h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialAddAlertW100Filled.displayName = 'OnesyIconMaterialAddAlertW100Filled';

export default IconMaterialAddAlertW100Filled;
