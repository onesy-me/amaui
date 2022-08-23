import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRowingRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RowingRoundedW100'
      short_name='Rowing'

      {...props}
    >
      <path d="M5.15 19.35Q5.025 19.225 5.025 19.05Q5.025 18.875 5.15 18.75L9.525 14.375L11.5 16.35H8.75L5.75 19.35Q5.625 19.475 5.45 19.475Q5.275 19.475 5.15 19.35ZM15 5.35Q14.425 5.35 14.038 4.962Q13.65 4.575 13.65 4Q13.65 3.425 14.038 3.037Q14.425 2.65 15 2.65Q15.575 2.65 15.963 3.037Q16.35 3.425 16.35 4Q16.35 4.575 15.963 4.962Q15.575 5.35 15 5.35ZM15.125 16.1 13.25 14.225V8.7Q12.225 9.725 11.138 10.387Q10.05 11.05 9 11.4L16.25 18.65H17.45Q17.6 18.65 17.725 18.7Q17.85 18.75 17.975 18.875L19.575 20.475Q19.7 20.6 19.75 20.725Q19.8 20.85 19.8 21Q19.8 21.15 19.75 21.275Q19.7 21.4 19.575 21.525L18.625 22.475Q18.5 22.6 18.375 22.65Q18.25 22.7 18.1 22.7Q17.95 22.7 17.825 22.65Q17.7 22.6 17.575 22.475L15.975 20.875Q15.85 20.75 15.8 20.625Q15.75 20.5 15.75 20.35V19.15L8.25 11.65Q8.025 11.7 7.85 11.75Q7.675 11.8 7.45 11.8Q7.25 11.8 7.175 11.7Q7.1 11.6 7.1 11.475Q7.1 11.3 7.188 11.212Q7.275 11.125 7.45 11.1Q8.625 10.95 10.175 10.112Q11.725 9.275 12.4 8.55L13.7 7.2Q13.9 6.975 14.225 6.812Q14.55 6.65 14.85 6.65Q15.5 6.65 15.875 7.025Q16.25 7.4 16.25 8.05V14Q16.25 14.725 15.925 15.262Q15.6 15.8 15.125 16.1Z"/>
    </Icon>
  );
});

IconMaterialRowingRoundedW100.displayName = 'AmauiIconMaterialRowingRoundedW100';

export default IconMaterialRowingRoundedW100;
