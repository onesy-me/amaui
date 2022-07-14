import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonAddRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddRoundedW100Filled'
      short_name='PersonAdd'

      {...props}
    >
      <path d="M18.675 13.35Q18.525 13.35 18.425 13.25Q18.325 13.15 18.325 13V10.35H15.675Q15.525 10.35 15.425 10.25Q15.325 10.15 15.325 10Q15.325 9.85 15.425 9.75Q15.525 9.65 15.675 9.65H18.325V7Q18.325 6.85 18.425 6.75Q18.525 6.65 18.675 6.65Q18.825 6.65 18.925 6.75Q19.025 6.85 19.025 7V9.65H21.675Q21.825 9.65 21.925 9.75Q22.025 9.85 22.025 10Q22.025 10.15 21.925 10.25Q21.825 10.35 21.675 10.35H19.025V13Q19.025 13.15 18.925 13.25Q18.825 13.35 18.675 13.35ZM8.675 11.2Q7.55 11.2 6.763 10.412Q5.975 9.625 5.975 8.5Q5.975 7.375 6.763 6.588Q7.55 5.8 8.675 5.8Q9.8 5.8 10.588 6.588Q11.375 7.375 11.375 8.5Q11.375 9.625 10.588 10.412Q9.8 11.2 8.675 11.2ZM2.725 18.2Q2.4 18.2 2.188 17.987Q1.975 17.775 1.975 17.45V16.9Q1.975 16.35 2.312 15.863Q2.65 15.375 3.225 15.1Q4.6 14.45 5.963 14.125Q7.325 13.8 8.675 13.8Q10.025 13.8 11.387 14.125Q12.75 14.45 14.125 15.1Q14.7 15.375 15.038 15.863Q15.375 16.35 15.375 16.9V17.45Q15.375 17.775 15.163 17.987Q14.95 18.2 14.625 18.2Z"/>
    </Icon>
  );
});

export default IconMaterialPersonAddRoundedW100Filled;
