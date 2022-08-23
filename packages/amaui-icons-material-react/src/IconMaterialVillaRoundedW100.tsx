import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaRoundedW100'
      short_name='Villa'

      {...props}
    >
      <path d="M5.05 19.7Q4.725 19.7 4.513 19.487Q4.3 19.275 4.3 18.95V9.425Q4.3 9.2 4.425 9Q4.55 8.8 4.775 8.725L13.975 5.175Q14.35 5.025 14.675 5.25Q15 5.475 15 5.875V13.3H16.9Q16.9 12.725 17.312 12.312Q17.725 11.9 18.3 11.9Q18.875 11.9 19.288 12.312Q19.7 12.725 19.7 13.3V18.95Q19.7 19.275 19.488 19.487Q19.275 19.7 18.95 19.7ZM5 19H9.6H10.3Q10.3 19 10.3 19Q10.3 19 10.3 19V14.05Q10.3 13.725 10.513 13.512Q10.725 13.3 11.05 13.3H14.3V12.6V5.775L5 9.375ZM11 19H14.3V17.6Q14.3 17.325 14.5 17.112Q14.7 16.9 15 16.9Q15.275 16.9 15.488 17.112Q15.7 17.325 15.7 17.6V19H19V14H11ZM9.6 12.6Q9.6 12.6 9.6 12.6Q9.6 12.6 9.6 12.6ZM15 19Q15 19 15 19Q15 19 15 19Q15 19 15 19Q15 19 15 19ZM15 18.3Q15 18.3 15 18.3Q15 18.3 15 18.3Q15 18.3 15 18.3Q15 18.3 15 18.3Z"/>
    </Icon>
  );
});

IconMaterialVillaRoundedW100.displayName = 'AmauiIconMaterialVillaRoundedW100';

export default IconMaterialVillaRoundedW100;
