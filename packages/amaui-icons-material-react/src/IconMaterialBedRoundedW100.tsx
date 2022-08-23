import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedRoundedW100'
      short_name='Bed'

      {...props}
    >
      <path d="M3.65 17.7Q3.5 17.7 3.4 17.6Q3.3 17.5 3.3 17.35V13Q3.3 12.625 3.55 12.137Q3.8 11.65 4.3 11.45V9.3Q4.3 8.575 4.787 8.087Q5.275 7.6 6 7.6H10.65Q11.15 7.6 11.475 7.812Q11.8 8.025 12 8.4Q12.2 8.025 12.525 7.812Q12.85 7.6 13.35 7.6H18Q18.725 7.6 19.213 8.087Q19.7 8.575 19.7 9.3V11.45Q20.2 11.65 20.45 12.137Q20.7 12.625 20.7 13V17.35Q20.7 17.5 20.6 17.6Q20.5 17.7 20.35 17.7Q20.2 17.7 20.1 17.6Q20 17.5 20 17.35V15.7H4V17.35Q4 17.5 3.9 17.6Q3.8 17.7 3.65 17.7ZM12.35 11.3H19V9.3Q19 8.875 18.712 8.587Q18.425 8.3 18 8.3H13.35Q12.925 8.3 12.638 8.587Q12.35 8.875 12.35 9.3ZM5 11.3H11.65V9.3Q11.65 8.875 11.363 8.587Q11.075 8.3 10.65 8.3H6Q5.575 8.3 5.287 8.587Q5 8.875 5 9.3ZM4 15H20V13Q20 12.575 19.712 12.287Q19.425 12 19 12H5Q4.575 12 4.287 12.287Q4 12.575 4 13ZM20 15H4Q4 15 4.287 15Q4.575 15 5 15H19Q19.425 15 19.712 15Q20 15 20 15Z"/>
    </Icon>
  );
});

IconMaterialBedRoundedW100.displayName = 'AmauiIconMaterialBedRoundedW100';

export default IconMaterialBedRoundedW100;
