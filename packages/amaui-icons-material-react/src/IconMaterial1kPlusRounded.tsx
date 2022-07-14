import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kPlusRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusRounded'
      short_name='1kPlus'

      {...props}
    >
      <path d="M11.25 15Q11.575 15 11.788 14.787Q12 14.575 12 14.25V12.75L13.525 14.7Q13.625 14.825 13.762 14.912Q13.9 15 14.075 15Q14.55 15 14.738 14.575Q14.925 14.15 14.65 13.8L13.25 12L14.7 10.15Q14.975 9.8 14.763 9.4Q14.55 9 14.125 9Q13.95 9 13.8 9.075Q13.65 9.15 13.525 9.3L12 11.25V9.725Q12 9.425 11.788 9.212Q11.575 9 11.25 9Q10.925 9 10.713 9.212Q10.5 9.425 10.5 9.75V14.275Q10.5 14.575 10.713 14.787Q10.925 15 11.25 15ZM7.5 10.5V14.275Q7.5 14.575 7.713 14.787Q7.925 15 8.25 15Q8.575 15 8.788 14.787Q9 14.575 9 14.25V9.75Q9 9.425 8.788 9.212Q8.575 9 8.25 9H6.725Q6.425 9 6.213 9.212Q6 9.425 6 9.75Q6 10.075 6.213 10.287Q6.425 10.5 6.75 10.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5ZM17 14Q17.2 14 17.35 13.85Q17.5 13.7 17.5 13.5V12.5H18.525Q18.725 12.5 18.863 12.35Q19 12.2 19 12Q19 11.8 18.85 11.65Q18.7 11.5 18.5 11.5H17.5V10.475Q17.5 10.275 17.35 10.137Q17.2 10 17 10Q16.8 10 16.65 10.15Q16.5 10.3 16.5 10.5V11.5H15.5Q15.3 11.5 15.163 11.65Q15.025 11.8 15.025 12Q15.025 12.2 15.175 12.35Q15.325 12.5 15.525 12.5H16.5V13.525Q16.5 13.725 16.65 13.863Q16.8 14 17 14Z"/>
    </Icon>
  );
});

export default IconMaterial1kPlusRounded;
