import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseW100Filled'

      short_name='House'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-212q-24.75 0-42.37-17.63Q236-247.25 236-272v-301l-116 86q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-253q8-6 17.21-8.5T480-773q9.58 0 18.79 2.5Q508-768 516-762l142 105v-60q0-12.92 9.06-21.96 9.06-9.04 22-9.04t21.94 9.04q9 9.04 9 21.96v106l138 102q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5l-116-86v301q0 24.75-17.62 42.37Q689.75-212 665-212h-55q-24.75 0-42.37-17.63Q550-247.25 550-272v-80q0-24.75-17.62-42.38Q514.75-412 490-412h-20q-24.75 0-42.37 17.62Q410-376.75 410-352v80q0 24.75-17.62 42.37Q374.75-212 350-212h-54Zm114-348h140q0-27-21-44.5T480-622q-28 0-49 17.41T410-560Z"/>
    </Icon>
  );
});

IconMaterialHouseW100Filled.displayName = 'OnesyIconMaterialHouseW100Filled';

export default IconMaterialHouseW100Filled;
