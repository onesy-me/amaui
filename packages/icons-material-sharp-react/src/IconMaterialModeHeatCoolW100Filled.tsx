import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatCoolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatCoolW100Filled'

      short_name='ModeHeatCool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-297q-62-20-99.5-72.5T159-487q0-47 16.5-86.5T216-646q24-33 52.5-58.5T321-748v29q0 42 29 71t71 29q15 0 29-5t26-13l12-8q21 18 36.5 40t24.5 48L425-433l-65-65-67 67q-13 13-20.5 30t-7.5 36q0 20 8 37t23 31Zm16-22q-9-9-14-20.5t-5-25.5q0-14 5.5-25.5T313-411l47-47 46 45-94 94ZM206-61l-20-20 653-653 20 20-206 206h206v28H624l-82 82 83 83h234v28H653l153 153-20 20-153-153v206h-28v-234l-83-83-83 83v234h-28v-206L206-61Z"/>
    </Icon>
  );
});

IconMaterialModeHeatCoolW100Filled.displayName = 'OnesyIconMaterialModeHeatCoolW100Filled';

export default IconMaterialModeHeatCoolW100Filled;
