import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransportationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransportationW100Filled'

      short_name='Transportation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M726-306q-68-2-116.5-44.5T552-466H430l-17-28h139q3-35 25-74.5t59-59.5H337l-17-28h326l-77-210H452v-28h137l87 238h50q75 0 124.5 50.5T900-480q0 72-51 123t-123 51Zm0-28q61 0 103.5-42.5T872-480q0-63-41.5-105.5T726-628q-12 0-22 2t-18 4l42 112-26 10-40-112q-38 18-60 56t-22 76q0 61 42.5 103.5T726-334ZM320-64q-39 0-66.5-27.5T226-158q0-8 1-14t3-14H66v-162h80v-146H66v-28h239l100 174h143v162H410q2 8 3 14t1 14q0 39-27.5 66.5T320-64ZM174-348h199l-83-146H174v146ZM320-92q27 0 46.5-19.5T386-158q0-27-19.5-46.5T320-224q-27 0-46.5 19.5T254-158q0 27 19.5 46.5T320-92Z"/>
    </Icon>
  );
});

IconMaterialTransportationW100Filled.displayName = 'OnesyIconMaterialTransportationW100Filled';

export default IconMaterialTransportationW100Filled;
