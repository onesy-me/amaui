import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeRounded'
      short_name='LocalPostOffice'

      {...props}
    >
      <path d="M3 22Q2.575 22 2.288 21.712Q2 21.425 2 21V13Q2 12.575 2.288 12.287Q2.575 12 3 12H6V8Q6 5.5 7.75 3.75Q9.5 2 12 2H16Q18.5 2 20.25 3.75Q22 5.5 22 8V21Q22 21.425 21.712 21.712Q21.425 22 21 22Q20.575 22 20.288 21.712Q20 21.425 20 21V19H16V21Q16 21.425 15.713 21.712Q15.425 22 15 22ZM16 17H20V8Q20 6.35 18.825 5.175Q17.65 4 16 4H12Q10.35 4 9.175 5.175Q8 6.35 8 8V12H15Q15.425 12 15.713 12.287Q16 12.575 16 13ZM11 10Q10.575 10 10.288 9.712Q10 9.425 10 9Q10 8.575 10.288 8.287Q10.575 8 11 8H17Q17.425 8 17.712 8.287Q18 8.575 18 9Q18 9.425 17.712 9.712Q17.425 10 17 10ZM9 16.85Q9 16.85 9 16.85Q9 16.85 9 16.85L14 14H4ZM4 20H14V15.75L10 18.025Q9.775 18.15 9.525 18.225Q9.275 18.3 9 18.3Q8.725 18.3 8.475 18.225Q8.225 18.15 8 18.025L4 15.75ZM4 14V14.65Q4 14.425 4 14.65Q4 14.875 4 15.3Q4 15.525 4 15.7Q4 15.875 4 15.975V15.75V20V15.75V15.975Q4 15.875 4 15.7Q4 15.525 4 15.3Q4 14.9 4 14.65Q4 14.4 4 14.65V14Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeRounded.displayName = 'AmauiIconMaterialLocalPostOfficeRounded';

export default IconMaterialLocalPostOfficeRounded;
