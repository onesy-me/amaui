import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSensorsOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsOffRounded'
      short_name='SensorsOff'

      {...props}
    >
      <path d="M19.075 21.9 8.125 10.975Q8.075 11.225 8.038 11.475Q8 11.725 8 12Q8 12.575 8.137 13.087Q8.275 13.6 8.55 14.05Q8.775 14.425 8.75 14.85Q8.725 15.275 8.45 15.55Q8.15 15.85 7.738 15.825Q7.325 15.8 7.1 15.475Q6.575 14.725 6.287 13.85Q6 12.975 6 12Q6 11.3 6.15 10.65Q6.3 10 6.575 9.425L5.1 7.95Q4.575 8.85 4.287 9.863Q4 10.875 4 12Q4 13.4 4.438 14.637Q4.875 15.875 5.675 16.9Q5.95 17.25 5.938 17.663Q5.925 18.075 5.625 18.375Q5.325 18.675 4.925 18.663Q4.525 18.65 4.25 18.325Q3.2 17.025 2.6 15.412Q2 13.8 2 12Q2 10.45 2.438 9.075Q2.875 7.7 3.65 6.5L2.075 4.925Q1.8 4.65 1.8 4.225Q1.8 3.8 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.525 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.2 22.2 19.775 22.2Q19.35 22.2 19.075 21.9ZM20.35 17.5 18.9 16.05Q19.425 15.15 19.712 14.137Q20 13.125 20 12Q20 10.6 19.562 9.363Q19.125 8.125 18.325 7.1Q18.05 6.75 18.062 6.338Q18.075 5.925 18.375 5.625Q18.675 5.325 19.075 5.337Q19.475 5.35 19.75 5.675Q20.8 6.975 21.4 8.575Q22 10.175 22 12Q22 13.525 21.562 14.912Q21.125 16.3 20.35 17.5ZM17.425 14.575 15.875 13.025Q15.925 12.775 15.963 12.525Q16 12.275 16 12Q16 11.425 15.863 10.912Q15.725 10.4 15.45 9.95Q15.225 9.575 15.25 9.15Q15.275 8.725 15.55 8.45Q15.85 8.15 16.263 8.162Q16.675 8.175 16.9 8.5Q17.425 9.225 17.712 10.125Q18 11.025 18 12Q18 12.7 17.85 13.35Q17.7 14 17.425 14.575Z"/>
    </Icon>
  );
});

export default IconMaterialSensorsOffRounded;
