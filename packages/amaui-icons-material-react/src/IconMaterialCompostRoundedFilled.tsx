import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompostRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompostRoundedFilled'
      short_name='Compost'

      {...props}
    >
      <path d="M12 21.5Q10.025 21.5 8.3 20.75Q6.575 20 5.287 18.712Q4 17.425 3.25 15.7Q2.5 13.975 2.5 12Q2.5 10.025 3.25 8.3Q4 6.575 5.287 5.287Q6.575 4 8.3 3.25Q10.025 2.5 12 2.5V1.2Q12 0.85 12.312 0.737Q12.625 0.625 12.85 0.85L15.65 3.65Q15.8 3.8 15.8 4Q15.8 4.2 15.65 4.35L12.85 7.15Q12.625 7.375 12.312 7.262Q12 7.15 12 6.8V5.5Q9.3 5.5 7.4 7.4Q5.5 9.3 5.5 12Q5.5 13.65 6.263 15.062Q7.025 16.475 8.3 17.35Q8.7 16.65 9.488 16.162Q10.275 15.675 11.3 15.55Q11.225 15.025 11.1 14.5Q10.975 13.975 10.8 13.525Q10.525 13.75 10.2 13.875Q9.875 14 9.5 14Q8.675 14 8.088 13.412Q7.5 12.825 7.5 12V11Q7.5 10.8 7.463 10.587Q7.425 10.375 7.35 10.175Q7.25 9.925 7.412 9.712Q7.575 9.5 7.85 9.525Q8.375 9.55 9 9.675Q9.625 9.8 10.175 10.075Q10.725 10.35 11.113 10.812Q11.5 11.275 11.5 12Q11.5 12.225 11.463 12.412Q11.425 12.6 11.325 12.8Q11 12.55 10.675 12.35Q10.35 12.15 10 12Q10.425 12.325 10.975 13Q11.525 13.675 12 14.6Q12.5 13.375 13.25 12.188Q14 11 15 10Q14.425 10.4 13.9 10.85Q13.375 11.3 12.875 11.8Q12.7 11.525 12.6 11.188Q12.5 10.85 12.5 10.5Q12.5 9.45 13.225 8.725Q13.95 8 15 8H16Q16.35 8 16.675 7.925Q17 7.85 17.275 7.7Q17.575 7.55 17.8 7.7Q18.025 7.85 18.025 8.125Q18.025 8.75 17.913 9.587Q17.8 10.425 17.475 11.188Q17.15 11.95 16.55 12.475Q15.95 13 15 13Q14.625 13 14.288 12.9Q13.95 12.8 13.675 12.625Q13.5 13.1 13.275 13.887Q13.05 14.675 12.925 15.575Q13.875 15.75 14.6 16.225Q15.325 16.7 15.7 17.35Q16.875 16.525 17.613 15.275Q18.35 14.025 18.475 12.5Q18.5 12.3 18.65 12.15Q18.8 12 19 12H21Q21.2 12 21.363 12.15Q21.525 12.3 21.5 12.5Q21.4 14.375 20.625 16.025Q19.85 17.675 18.562 18.888Q17.275 20.1 15.588 20.8Q13.9 21.5 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialCompostRoundedFilled.displayName = 'AmauiIconMaterialCompostRoundedFilled';

export default IconMaterialCompostRoundedFilled;
