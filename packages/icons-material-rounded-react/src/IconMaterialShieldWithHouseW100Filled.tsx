import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseW100Filled'

      short_name='ShieldWithHouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-304q0-13 8.5-21.5T456-334h48q13 0 21.5 8.5T534-304v122q0 9 7.5 13t15.5 0q69-40 113-104t63-142L500-597q-9-7-20-7t-20 7L227-415q19 77 63 141t111 104q8 5 16.5 0t8.5-15v-119ZM212-682v166q0 17 2 36.5t4 36.5l225-175q17-13 37-13t37 13l225 175q2-17 4-36.5t2-36.5v-166q0-19-11-34.5T709-739l-208-77q-11-4-21-4t-21 4l-208 77q-17 7-28 22.5T212-682Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseW100Filled.displayName = 'OnesyIconMaterialShieldWithHouseW100Filled';

export default IconMaterialShieldWithHouseW100Filled;
