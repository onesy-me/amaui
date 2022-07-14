import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffRounded'
      short_name='OpenInNewOff'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5.85Q3 5.85 3 5.85Q3 5.85 3 5.85L2.075 4.925Q1.8 4.65 1.8 4.237Q1.8 3.825 2.1 3.525Q2.4 3.225 2.812 3.225Q3.225 3.225 3.525 3.525L20.5 20.5Q20.775 20.775 20.788 21.188Q20.8 21.6 20.5 21.9Q20.2 22.2 19.788 22.2Q19.375 22.2 19.075 21.9L18.15 21Q18.15 21 18.15 21Q18.15 21 18.15 21ZM5 19H16.15L11.275 14.125L10.375 15.025Q10.1 15.3 9.7 15.3Q9.3 15.3 9 15Q8.725 14.725 8.725 14.3Q8.725 13.875 9 13.6L9.875 12.725L5 7.85V19Q5 19 5 19Q5 19 5 19ZM21 18.15 19 16.15V13Q19 12.575 19.288 12.287Q19.575 12 20 12Q20.425 12 20.712 12.287Q21 12.575 21 13ZM14.125 11.275 12.725 9.875 17.6 5H15Q14.575 5 14.288 4.712Q14 4.425 14 4Q14 3.575 14.288 3.287Q14.575 3 15 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4V9Q21 9.425 20.712 9.712Q20.425 10 20 10Q19.575 10 19.288 9.712Q19 9.425 19 9V6.4ZM7.85 5 5.85 3H11Q11.425 3 11.713 3.287Q12 3.575 12 4Q12 4.425 11.713 4.712Q11.425 5 11 5Z"/>
    </Icon>
  );
});

export default IconMaterialOpenInNewOffRounded;
