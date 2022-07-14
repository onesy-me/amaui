import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSensorsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsSharp'
      short_name='Sensors'

      {...props}
    >
      <path d="M12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14ZM4.925 19.075Q3.575 17.7 2.788 15.887Q2 14.075 2 12Q2 9.9 2.788 8.087Q3.575 6.275 4.925 4.925L6.35 6.35Q5.25 7.45 4.625 8.9Q4 10.35 4 12Q4 13.675 4.625 15.125Q5.25 16.575 6.35 17.65ZM7.75 16.25Q6.95 15.425 6.475 14.337Q6 13.25 6 12Q6 10.725 6.475 9.637Q6.95 8.55 7.75 7.75L9.175 9.175Q8.625 9.725 8.312 10.45Q8 11.175 8 12Q8 12.825 8.312 13.55Q8.625 14.275 9.175 14.825ZM16.25 16.25 14.825 14.825Q15.375 14.275 15.688 13.55Q16 12.825 16 12Q16 11.175 15.688 10.45Q15.375 9.725 14.825 9.175L16.25 7.75Q17.05 8.55 17.525 9.637Q18 10.725 18 12Q18 13.25 17.525 14.337Q17.05 15.425 16.25 16.25ZM19.075 19.075 17.65 17.65Q18.75 16.55 19.375 15.1Q20 13.65 20 12Q20 10.325 19.375 8.875Q18.75 7.425 17.65 6.35L19.075 4.925Q20.425 6.275 21.212 8.087Q22 9.9 22 12Q22 14.075 21.212 15.887Q20.425 17.7 19.075 19.075Z"/>
    </Icon>
  );
});

export default IconMaterialSensorsSharp;
