import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariableInsertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableInsertW100Filled'

      short_name='VariableInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-332q-12.75 0-21.37-8.51-8.63-8.51-8.63-21.09v-236.82q0-12.58 8.63-21.08 8.62-8.5 21.37-8.5h556q12.75 0 21.38 8.5Q788-611 788-598.47v58.94q0 12.53-8.62 21.03-8.63 8.5-21.38 8.5H650q-24.75 0-42.37 17.62Q590-474.75 590-450v88.5q0 12.54-8.62 21.02Q572.75-332 560-332H202Zm516-30v116q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-134.18q0-12.67 8.57-21.25 8.58-8.57 21.25-8.57H854q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H738l140 142q4 3.73 4 8.87 0 5.13-4 9.13-4 4-9.5 4t-9.5-4L718-362Z"/>
    </Icon>
  );
});

IconMaterialVariableInsertW100Filled.displayName = 'OnesyIconMaterialVariableInsertW100Filled';

export default IconMaterialVariableInsertW100Filled;
