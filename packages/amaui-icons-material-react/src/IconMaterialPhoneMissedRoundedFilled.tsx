import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneMissedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedRoundedFilled'
      short_name='PhoneMissed'

      {...props}
    >
      <path d="M3.425 20.4 1.125 18.15Q0.85 17.875 0.85 17.45Q0.85 17.025 1.125 16.75Q3.25 14.45 6.075 13.225Q8.9 12 12.025 12Q15.15 12 17.975 13.238Q20.8 14.475 22.925 16.75Q23.2 17.025 23.2 17.45Q23.2 17.875 22.925 18.15L20.625 20.4Q20.35 20.675 19.988 20.7Q19.625 20.725 19.325 20.5L16.425 18.3Q16.225 18.15 16.125 17.95Q16.025 17.75 16.025 17.5V14.65Q15.05 14.325 14.05 14.162Q13.05 14 12.025 14Q11 14 10 14.162Q9 14.325 8.025 14.65V17.5Q8.025 17.75 7.925 17.95Q7.825 18.15 7.625 18.3L4.725 20.5Q4.425 20.725 4.062 20.7Q3.7 20.675 3.425 20.4ZM12 10.975Q11.8 10.975 11.625 10.912Q11.45 10.85 11.3 10.7L7.05 6.45V8.05Q7.05 8.475 6.763 8.762Q6.475 9.05 6.05 9.05Q5.625 9.05 5.338 8.762Q5.05 8.475 5.05 8.05V4.05Q5.05 3.625 5.338 3.337Q5.625 3.05 6.05 3.05H10.05Q10.475 3.05 10.763 3.337Q11.05 3.625 11.05 4.05Q11.05 4.475 10.763 4.762Q10.475 5.05 10.05 5.05H8.45L11.975 8.575L16.925 3.625Q17.225 3.325 17.638 3.325Q18.05 3.325 18.35 3.625Q18.65 3.925 18.65 4.337Q18.65 4.75 18.35 5.05L12.7 10.7Q12.55 10.85 12.375 10.912Q12.2 10.975 12 10.975Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedRoundedFilled.displayName = 'AmauiIconMaterialPhoneMissedRoundedFilled';

export default IconMaterialPhoneMissedRoundedFilled;
