import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartScreenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartScreenRoundedFilled'
      short_name='SmartScreen'

      {...props}
    >
      <path d="M13.25 12.75Q12.925 12.75 12.713 12.537Q12.5 12.325 12.5 12Q12.5 11.675 12.713 11.462Q12.925 11.25 13.25 11.25Q13.575 11.25 13.788 11.462Q14 11.675 14 12Q14 12.325 13.788 12.537Q13.575 12.75 13.25 12.75ZM8.25 12.75Q7.925 12.75 7.713 12.537Q7.5 12.325 7.5 12Q7.5 11.675 7.713 11.462Q7.925 11.25 8.25 11.25Q8.575 11.25 8.788 11.462Q9 11.675 9 12Q9 12.325 8.788 12.537Q8.575 12.75 8.25 12.75ZM15.75 12.75Q15.425 12.75 15.213 12.537Q15 12.325 15 12Q15 11.675 15.213 11.462Q15.425 11.25 15.75 11.25Q16.075 11.25 16.288 11.462Q16.5 11.675 16.5 12Q16.5 12.325 16.288 12.537Q16.075 12.75 15.75 12.75ZM10.75 12.75Q10.425 12.75 10.213 12.537Q10 12.325 10 12Q10 11.675 10.213 11.462Q10.425 11.25 10.75 11.25Q11.075 11.25 11.288 11.462Q11.5 11.675 11.5 12Q11.5 12.325 11.288 12.537Q11.075 12.75 10.75 12.75ZM3 19Q2.175 19 1.588 18.413Q1 17.825 1 17V7Q1 6.175 1.588 5.588Q2.175 5 3 5H21Q21.825 5 22.413 5.588Q23 6.175 23 7V17Q23 17.825 22.413 18.413Q21.825 19 21 19ZM6 17H18V7H6Z"/>
    </Icon>
  );
});

export default IconMaterialSmartScreenRoundedFilled;
