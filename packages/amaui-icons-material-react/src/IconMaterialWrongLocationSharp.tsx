import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrongLocationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationSharp'
      short_name='WrongLocation'

      {...props}
    >
      <path d="M12 22Q11.65 22 11.4 21.8Q11.15 21.6 11.025 21.275Q10.55 19.875 9.838 18.65Q9.125 17.425 7.85 15.775Q6.575 14.125 5.787 12.625Q5 11.125 5 9Q5 6.075 7.038 4.037Q9.075 2 12 2Q12.475 2 12.988 2.087Q13.5 2.175 14 2.3V3.325V4.35Q13.625 4.2 13.075 4.1Q12.525 4 12 4Q9.925 4 8.463 5.463Q7 6.925 7 9Q7 10.775 7.688 11.962Q8.375 13.15 9.45 14.55Q10.5 15.925 11.038 16.75Q11.575 17.575 12 18.425Q12.425 17.575 12.963 16.75Q13.5 15.925 14.55 14.55Q15.625 13.15 16.312 11.962Q17 10.775 17 9H18H19Q19 11.275 18.138 12.787Q17.275 14.3 16.15 15.775Q14.8 17.575 14.113 18.762Q13.425 19.95 12.975 21.275Q12.85 21.625 12.588 21.812Q12.325 22 12 22ZM12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9ZM12 11.5Q13.05 11.5 13.775 10.775Q14.5 10.05 14.5 9Q14.5 7.95 13.775 7.225Q13.05 6.5 12 6.5Q10.95 6.5 10.225 7.225Q9.5 7.95 9.5 9Q9.5 10.05 10.225 10.775Q10.95 11.5 12 11.5ZM16.875 8.05 15.475 6.65 17.575 4.55 15.475 2.45 16.875 1.05 18.975 3.15 21.075 1.05 22.475 2.45 20.375 4.55 22.475 6.65 21.075 8.05 18.975 5.95Z"/>
    </Icon>
  );
});

export default IconMaterialWrongLocationSharp;
