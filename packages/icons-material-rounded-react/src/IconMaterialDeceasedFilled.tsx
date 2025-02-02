import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeceasedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeceasedFilled'

      short_name='Deceased'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-153q-86-14-143-80.5T240-680v-136q0-26 23-36.5t43 6.5l74 64 69-84q12-14 31-14t31 14l69 84 74-64q20-17 43-6.5t23 36.5v136q0 90-57 156.5T520-443v153q43-51 106-81t134-29v80q0 100-70 170T520-80h-80Z"/>
    </Icon>
  );
});

IconMaterialDeceasedFilled.displayName = 'OnesyIconMaterialDeceasedFilled';

export default IconMaterialDeceasedFilled;
