import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterDramaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaFilled'

      short_name='FilterDrama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-2.3 0-3.9-1.6T1 14.5q0-1.825 1.338-3.163Q3.675 10 5.5 10t3.162 1.337Q10 12.675 10 14.5h2q0-2.575-1.6-4.312Q8.8 8.45 6.25 8q.45-1.85 2.037-2.925Q9.875 4 12 4q2.95 0 4.975 2.025Q19 8.05 19 11q1.575 0 2.788 1.4Q23 13.8 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaFilled.displayName = 'AmauiIconMaterialFilterDramaFilled';

export default IconMaterialFilterDramaFilled;
