import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatLegroomExtra = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtra'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98C15.96 9.45 15.27 9 14.51 9H11V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtra.displayName = 'OnesyIconMaterialAirlineSeatLegroomExtra';

export default IconMaterialAirlineSeatLegroomExtra;
