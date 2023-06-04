import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationHome'

      short_name='LocationHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12Zm2-11v8q1.275-.95 2.788-1.475Q10.3 16 12 16q1.7 0 3.213.525Q16.725 17.05 18 18v-8l-6-4.5Zm6 5q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15Zm0-2q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm-3.85 6h7.7q-.875-.5-1.837-.75Q13.05 18 12 18q-1.05 0-2.012.25-.963.25-1.838.75Z"/>
    </Icon>
  );
});

IconMaterialLocationHome.displayName = 'AmauiIconMaterialLocationHome';

export default IconMaterialLocationHome;
