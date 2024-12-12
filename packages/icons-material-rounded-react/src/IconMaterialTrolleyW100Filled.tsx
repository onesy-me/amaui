import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrolleyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrolleyW100Filled'

      short_name='Trolley'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M826-280H272q-24.75 0-42.37-17.63Q212-315.25 212-340v-388q0-14-9-23t-23-9h-60q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h60q24.75 0 42.38 17.62Q240-752.75 240-728v388q0 14 9 23t23 9h554q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM263-138q-22 0-37-15t-15-37q0-22 15-37t37-15q22 0 37 15t15 37q0 22-15 37t-37 15Zm87-250q-12.75 0-21.37-8.63Q320-405.25 320-418v-100q0-12.75 8.63-21.38Q337.25-548 350-548h100q12.75 0 21.38 8.62Q480-530.75 480-518v100q0 12.75-8.62 21.37Q462.75-388 450-388H350Zm280 0q-12.75 0-21.37-8.63Q600-405.25 600-418v-100q0-12.75 8.63-21.38Q617.25-548 630-548h100q12.75 0 21.38 8.62Q760-530.75 760-518v100q0 12.75-8.62 21.37Q742.75-388 730-388H630Zm156.9 250q-21.9 0-36.4-15T736-190q0-22 14.5-37t36.4-15q21.91 0 37.5 15 15.6 15 15.6 37t-15.6 37q-15.59 15-37.5 15Z"/>
    </Icon>
  );
});

IconMaterialTrolleyW100Filled.displayName = 'OnesyIconMaterialTrolleyW100Filled';

export default IconMaterialTrolleyW100Filled;
