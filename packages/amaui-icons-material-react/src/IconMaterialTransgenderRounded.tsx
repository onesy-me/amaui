import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransgenderRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransgenderRounded'
      short_name='Transgender'

      {...props}
    >
      <path d="M12 15Q13.45 15 14.475 13.975Q15.5 12.95 15.5 11.5Q15.5 10.05 14.475 9.025Q13.45 8 12 8Q10.55 8 9.525 9.025Q8.5 10.05 8.5 11.5Q8.5 12.95 9.525 13.975Q10.55 15 12 15ZM12 23Q11.575 23 11.288 22.712Q11 22.425 11 22V21H10Q9.575 21 9.288 20.712Q9 20.425 9 20Q9 19.575 9.288 19.288Q9.575 19 10 19H11V16.9Q9.075 16.55 7.788 15.037Q6.5 13.525 6.5 11.5Q6.5 10.625 6.75 9.837Q7 9.05 7.45 8.4L6.8 7.75L6.075 8.475Q5.8 8.75 5.4 8.75Q5 8.75 4.7 8.45Q4.425 8.175 4.425 7.762Q4.425 7.35 4.7 7.05L5.4 6.325L3.5 4.425V6Q3.5 6.425 3.213 6.713Q2.925 7 2.5 7Q2.075 7 1.788 6.713Q1.5 6.425 1.5 6V2Q1.5 1.575 1.788 1.287Q2.075 1 2.5 1H6.5Q6.925 1 7.213 1.287Q7.5 1.575 7.5 2Q7.5 2.425 7.213 2.712Q6.925 3 6.5 3H4.925L6.825 4.9L7.55 4.175Q7.825 3.9 8.238 3.9Q8.65 3.9 8.95 4.2Q9.225 4.475 9.225 4.887Q9.225 5.3 8.95 5.6L8.25 6.325L8.9 6.975Q9.55 6.5 10.338 6.25Q11.125 6 12 6Q12.875 6 13.663 6.25Q14.45 6.5 15.1 6.975L19.075 3H17.5Q17.075 3 16.788 2.712Q16.5 2.425 16.5 2Q16.5 1.575 16.788 1.287Q17.075 1 17.5 1H21.5Q21.925 1 22.212 1.287Q22.5 1.575 22.5 2V6Q22.5 6.425 22.212 6.713Q21.925 7 21.5 7Q21.075 7 20.788 6.713Q20.5 6.425 20.5 6V4.425L16.525 8.375Q17 9.05 17.25 9.837Q17.5 10.625 17.5 11.5Q17.5 13.525 16.212 15.037Q14.925 16.55 13 16.9V19H14Q14.425 19 14.713 19.288Q15 19.575 15 20Q15 20.425 14.713 20.712Q14.425 21 14 21H13V22Q13 22.425 12.713 22.712Q12.425 23 12 23Z"/>
    </Icon>
  );
});

IconMaterialTransgenderRounded.displayName = 'AmauiIconMaterialTransgenderRounded';

export default IconMaterialTransgenderRounded;
