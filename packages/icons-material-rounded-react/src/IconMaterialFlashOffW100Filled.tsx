import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffW100Filled'

      short_name='FlashOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M579-494 371-702q-9-9-14-20t-5-24v-32q0-22 16-36t39-14h134q26 0 43 18.5t10 41.5l-46 157h70q27 0 39.5 23.5T655-541l-30 43q-8 11-22 12.5t-24-8.5Zm205 358L543-377l-50 73q-4 6-11 8.5t-14 .5q-8-2-12-8t-4-14v-135h-40q-25 0-42.5-17.5T352-512v-56L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialFlashOffW100Filled.displayName = 'OnesyIconMaterialFlashOffW100Filled';

export default IconMaterialFlashOffW100Filled;
