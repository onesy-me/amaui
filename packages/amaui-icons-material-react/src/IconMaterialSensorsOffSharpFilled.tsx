import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSensorsOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsOffSharpFilled'
      short_name='SensorsOff'

      {...props}
    >
      <path d="M4.925 19.075Q3.575 17.7 2.788 15.887Q2 14.075 2 12Q2 10.45 2.438 9.075Q2.875 7.7 3.65 6.5L1.375 4.225L2.8 2.8L21.2 21.2L19.775 22.625L8.125 10.975Q8.075 11.225 8.038 11.475Q8 11.725 8 12Q8 12.825 8.312 13.55Q8.625 14.275 9.175 14.825L7.75 16.25Q6.95 15.425 6.475 14.337Q6 13.25 6 12Q6 11.3 6.15 10.65Q6.3 10 6.575 9.425L5.1 7.95Q4.575 8.85 4.287 9.863Q4 10.875 4 12Q4 13.675 4.625 15.125Q5.25 16.575 6.35 17.65ZM20.35 17.5 18.9 16.05Q19.425 15.15 19.712 14.137Q20 13.125 20 12Q20 10.325 19.375 8.875Q18.75 7.425 17.65 6.35L19.075 4.925Q20.425 6.275 21.212 8.087Q22 9.9 22 12Q22 13.525 21.562 14.912Q21.125 16.3 20.35 17.5ZM17.425 14.575 15.875 13.025Q15.925 12.775 15.963 12.525Q16 12.275 16 12Q16 11.175 15.688 10.45Q15.375 9.725 14.825 9.175L16.25 7.75Q17.05 8.55 17.525 9.637Q18 10.725 18 12Q18 12.7 17.85 13.35Q17.7 14 17.425 14.575Z"/>
    </Icon>
  );
});

IconMaterialSensorsOffSharpFilled.displayName = 'AmauiIconMaterialSensorsOffSharpFilled';

export default IconMaterialSensorsOffSharpFilled;
