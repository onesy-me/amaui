import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHvacRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HvacRoundedW100Filled'
      short_name='Hvac'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM12 16.825Q14 16.825 15.412 15.412Q16.825 14 16.825 12Q16.825 10 15.412 8.588Q14 7.175 12 7.175Q10 7.175 8.588 8.588Q7.175 10 7.175 12Q7.175 14 8.588 15.412Q10 16.825 12 16.825ZM7.875 11.65Q7.925 11.15 8.075 10.7Q8.225 10.25 8.475 9.85H15.55Q15.75 10.25 15.912 10.7Q16.075 11.15 16.125 11.65ZM8.45 14.15Q8.25 13.75 8.088 13.3Q7.925 12.85 7.875 12.35H16.125Q16.075 12.85 15.925 13.3Q15.775 13.75 15.525 14.15ZM12 16.15Q11.2 16.15 10.425 15.825Q9.65 15.5 8.975 14.85H15.025Q14.35 15.5 13.575 15.825Q12.8 16.15 12 16.15ZM8.975 9.15Q9.65 8.5 10.425 8.175Q11.2 7.85 12 7.85Q12.8 7.85 13.575 8.175Q14.35 8.5 15.025 9.15Z"/>
    </Icon>
  );
});

IconMaterialHvacRoundedW100Filled.displayName = 'AmauiIconMaterialHvacRoundedW100Filled';

export default IconMaterialHvacRoundedW100Filled;
