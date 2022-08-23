import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenSearchDesktopRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktopRoundedFilled'
      short_name='ScreenSearchDesktop'

      {...props}
    >
      <path d="M14.925 14.525Q15.15 14.75 15.463 14.738Q15.775 14.725 16 14.5Q16.225 14.275 16.225 13.962Q16.225 13.65 16 13.425L14.45 11.9Q14.725 11.475 14.863 11Q15 10.525 15 10Q15 8.525 13.963 7.512Q12.925 6.5 11.5 6.5Q10.075 6.5 9.038 7.512Q8 8.525 8 10Q8 11.475 9.038 12.488Q10.075 13.5 11.5 13.5Q12.025 13.5 12.488 13.387Q12.95 13.275 13.4 13ZM11.5 12Q10.675 12 10.088 11.412Q9.5 10.825 9.5 10Q9.5 9.175 10.088 8.587Q10.675 8 11.5 8Q12.3 8 12.9 8.587Q13.5 9.175 13.5 10Q13.5 10.825 12.913 11.412Q12.325 12 11.5 12ZM4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM2 21Q1.575 21 1.288 20.712Q1 20.425 1 20Q1 19.575 1.288 19.288Q1.575 19 2 19H22Q22.425 19 22.712 19.288Q23 19.575 23 20Q23 20.425 22.712 20.712Q22.425 21 22 21Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktopRoundedFilled.displayName = 'AmauiIconMaterialScreenSearchDesktopRoundedFilled';

export default IconMaterialScreenSearchDesktopRoundedFilled;
