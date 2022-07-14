import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCookieRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieRoundedFilled'
      short_name='Cookie'

      {...props}
    >
      <path d="M10.5 10Q11.125 10 11.562 9.562Q12 9.125 12 8.5Q12 7.875 11.562 7.438Q11.125 7 10.5 7Q9.875 7 9.438 7.438Q9 7.875 9 8.5Q9 9.125 9.438 9.562Q9.875 10 10.5 10ZM8.5 15Q9.125 15 9.562 14.562Q10 14.125 10 13.5Q10 12.875 9.562 12.438Q9.125 12 8.5 12Q7.875 12 7.438 12.438Q7 12.875 7 13.5Q7 14.125 7.438 14.562Q7.875 15 8.5 15ZM15 16Q15.425 16 15.713 15.712Q16 15.425 16 15Q16 14.575 15.713 14.287Q15.425 14 15 14Q14.575 14 14.288 14.287Q14 14.575 14 15Q14 15.425 14.288 15.712Q14.575 16 15 16ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.975 2.838 8.062Q3.675 6.15 5.163 4.7Q6.65 3.25 8.7 2.5Q10.75 1.75 13.2 2.05Q13.575 2.1 13.775 2.362Q13.975 2.625 14 3.075Q14.05 4.675 15.188 5.812Q16.325 6.95 17.9 7Q18.425 7.025 18.7 7.3Q18.975 7.575 19 8.15Q19.05 9.2 19.638 9.875Q20.225 10.55 21.275 10.9Q21.625 11.025 21.812 11.262Q22 11.5 22 11.85Q22.05 13.925 21.275 15.775Q20.5 17.625 19.15 19.012Q17.8 20.4 15.95 21.2Q14.1 22 12 22Z"/>
    </Icon>
  );
});

export default IconMaterialCookieRoundedFilled;
