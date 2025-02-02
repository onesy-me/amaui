import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPartlyCloudyDayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartlyCloudyDayW100Filled'

      short_name='PartlyCloudyDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-210q-54 0-92-38t-38-92q0-50 35-85t85-35q35 0 64.5 19t44.5 51l17 41h46q29 0 48.5 20t19.5 49q0 29-20.5 49.5T430-210H270Zm306-108q-11-48-49-79t-87-31q-19-43-55.5-71.5T301-536q18-59 67.5-95.5T480-668q78 0 133 55t55 133q0 50-25 93t-67 69ZM466-738v-128h28v128h-28Zm206 86-20-21 91-91 20 21-91 91Zm66 186v-28h128v28H738Zm5 269-91-91 21-21 91 91-21 21ZM289-651l-93-93 22-18 91 91-20 20Z"/>
    </Icon>
  );
});

IconMaterialPartlyCloudyDayW100Filled.displayName = 'OnesyIconMaterialPartlyCloudyDayW100Filled';

export default IconMaterialPartlyCloudyDayW100Filled;
