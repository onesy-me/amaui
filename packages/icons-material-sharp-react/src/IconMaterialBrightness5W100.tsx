import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness5W100'

      short_name='Brightness5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100 367.77-212H212v-155.77L100-480l112-112.22V-748h155.77L480-860l112.22 112H748v155.78L860-480 748-367.77V-212H592.22L480-100Zm0-220q66.4 0 113.2-46.8T640-480q0-66.4-46.8-113.2T480-640q-66.4 0-113.2 46.8T320-480q0 66.4 46.8 113.2T480-320Zm0-28q-55 0-93.5-38.5T348-480q0-55 38.5-93.5T480-612q55 0 93.5 38.5T612-480q0 55-38.5 93.5T480-348Zm0 208 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialBrightness5W100.displayName = 'OnesyIconMaterialBrightness5W100';

export default IconMaterialBrightness5W100;
