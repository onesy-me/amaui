import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3kPlusRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kPlusRounded'
      short_name='3kPlus'

      {...props}
    >
      <path d="M11.75 15Q12.075 15 12.288 14.787Q12.5 14.575 12.5 14.25V12.75L14.025 14.7Q14.125 14.825 14.262 14.912Q14.4 15 14.575 15Q15.05 15 15.238 14.575Q15.425 14.15 15.15 13.8L13.75 12L15.2 10.15Q15.475 9.8 15.263 9.4Q15.05 9 14.625 9Q14.45 9 14.3 9.075Q14.15 9.15 14.025 9.3L12.5 11.25V9.725Q12.5 9.425 12.288 9.212Q12.075 9 11.75 9Q11.425 9 11.213 9.212Q11 9.425 11 9.75V14.275Q11 14.575 11.213 14.787Q11.425 15 11.75 15ZM6.25 15H9Q9.425 15 9.713 14.712Q10 14.425 10 14V10Q10 9.575 9.713 9.287Q9.425 9 9 9H6.225Q5.925 9 5.713 9.212Q5.5 9.425 5.5 9.75Q5.5 10.075 5.713 10.287Q5.925 10.5 6.25 10.5H8.5V11.5H6.975Q6.775 11.5 6.638 11.65Q6.5 11.8 6.5 12Q6.5 12.2 6.65 12.35Q6.8 12.5 7 12.5H8.5V13.5H6.225Q5.925 13.5 5.713 13.712Q5.5 13.925 5.5 14.25Q5.5 14.575 5.713 14.787Q5.925 15 6.25 15ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5ZM17 14Q17.2 14 17.35 13.85Q17.5 13.7 17.5 13.5V12.5H18.525Q18.725 12.5 18.863 12.35Q19 12.2 19 12Q19 11.8 18.85 11.65Q18.7 11.5 18.5 11.5H17.5V10.475Q17.5 10.275 17.35 10.137Q17.2 10 17 10Q16.8 10 16.65 10.15Q16.5 10.3 16.5 10.5V11.5H15.5Q15.3 11.5 15.163 11.65Q15.025 11.8 15.025 12Q15.025 12.2 15.175 12.35Q15.325 12.5 15.525 12.5H16.5V13.525Q16.5 13.725 16.65 13.863Q16.8 14 17 14Z"/>
    </Icon>
  );
});

IconMaterial3kPlusRounded.displayName = 'AmauiIconMaterial3kPlusRounded';

export default IconMaterial3kPlusRounded;
