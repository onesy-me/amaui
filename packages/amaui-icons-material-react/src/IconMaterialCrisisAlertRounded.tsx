import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrisisAlertRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CrisisAlertRounded'
      short_name='CrisisAlert'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.15 3.488 6.737Q4.975 4.325 7.525 3.05Q7.55 3.525 7.625 4.012Q7.7 4.5 7.875 5.15Q6.075 6.25 5.037 8.062Q4 9.875 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 9.875 18.962 8.05Q17.925 6.225 16.1 5.125Q16.275 4.475 16.35 3.987Q16.425 3.5 16.475 3.05Q19.025 4.325 20.513 6.725Q22 9.125 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 18Q9.5 18 7.75 16.25Q6 14.5 6 12Q6 10.55 6.638 9.275Q7.275 8 8.45 7.15Q8.575 7.525 8.725 8.012Q8.875 8.5 9.125 9.225Q8.575 9.8 8.288 10.5Q8 11.2 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Q13.65 16 14.825 14.825Q16 13.65 16 12Q16 11.2 15.713 10.5Q15.425 9.8 14.875 9.225Q15.075 8.625 15.238 8.112Q15.4 7.6 15.525 7.15Q16.7 8 17.35 9.275Q18 10.55 18 12Q18 14.5 16.25 16.25Q14.5 18 12 18ZM12 0Q13.05 0 13.775 0.725Q14.5 1.45 14.5 2.5Q14.5 3.325 14.288 4.312Q14.075 5.3 13.35 7.475Q13.2 7.925 12.838 8.213Q12.475 8.5 12 8.5Q11.525 8.5 11.163 8.213Q10.8 7.925 10.65 7.475Q9.925 5.3 9.713 4.312Q9.5 3.325 9.5 2.5Q9.5 1.45 10.225 0.725Q10.95 0 12 0ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialCrisisAlertRounded.displayName = 'AmauiIconMaterialCrisisAlertRounded';

export default IconMaterialCrisisAlertRounded;
