import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWhatshotRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotRounded'
      short_name='Whatshot'

      {...props}
    >
      <path d="M2.05 11Q2.425 7.2 5.25 4.6Q8.075 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22Q10.675 22 9.425 21.675Q8.175 21.35 7.05 20.7Q6.6 20.45 6.55 19.975Q6.5 19.5 6.9 19.1Q7.125 18.875 7.475 18.825Q7.825 18.775 8.1 18.95Q9.025 19.45 10 19.725Q10.975 20 12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.925 4 6.675 6.012Q4.425 8.025 4.05 11Q4 11.425 3.713 11.712Q3.425 12 3 12Q2.575 12 2.288 11.7Q2 11.4 2.05 11ZM3 17.5Q2.725 17.225 2.725 16.8Q2.725 16.375 3 16.1L7.3 11.8Q7.575 11.525 7.963 11.5Q8.35 11.475 8.65 11.725L10.95 13.65L14.6 10H13Q12.575 10 12.288 9.712Q12 9.425 12 9Q12 8.575 12.288 8.287Q12.575 8 13 8H17Q17.425 8 17.712 8.287Q18 8.575 18 9V13Q18 13.425 17.712 13.712Q17.425 14 17 14Q16.575 14 16.288 13.712Q16 13.425 16 13V11.4L11.7 15.7Q11.425 15.975 11.038 16Q10.65 16.025 10.35 15.775L8.05 13.85L4.4 17.5Q4.125 17.775 3.7 17.775Q3.275 17.775 3 17.5ZM11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Q11 12.35 11 12.35Z"/>
    </Icon>
  );
});

IconMaterialWhatshotRounded.displayName = 'AmauiIconMaterialWhatshotRounded';

export default IconMaterialWhatshotRounded;
