import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityPercentage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityPercentage'

      short_name='HumidityPercentage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 18q.625 0 1.062-.438Q16 17.125 16 16.5t-.438-1.062Q15.125 15 14.5 15t-1.062.438Q13 15.875 13 16.5t.438 1.062Q13.875 18 14.5 18Zm-5.05-.05 6.5-6.5-1.4-1.4-6.5 6.5ZM9.5 13q.625 0 1.062-.438Q11 12.125 11 11.5t-.438-1.062Q10.125 10 9.5 10t-1.062.438Q8 10.875 8 11.5t.438 1.062Q8.875 13 9.5 13Zm2.5 9q-3.425 0-5.712-2.35Q4 17.3 4 13.8q0-2.5 1.988-5.437Q7.975 5.425 12 2q4.025 3.425 6.013 6.363Q20 11.3 20 13.8q0 3.5-2.288 5.85Q15.425 22 12 22Zm0-2q2.6 0 4.3-1.762Q18 16.475 18 13.8q0-1.825-1.512-4.125Q14.975 7.375 12 4.65 9.025 7.375 7.513 9.675 6 11.975 6 13.8q0 2.675 1.7 4.438Q9.4 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialHumidityPercentage.displayName = 'AmauiIconMaterialHumidityPercentage';

export default IconMaterialHumidityPercentage;
