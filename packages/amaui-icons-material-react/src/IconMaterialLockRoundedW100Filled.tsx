import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockRoundedW100Filled'
      short_name='Lock'

      {...props}
    >
      <path d="M12 3.6Q13.55 3.6 14.625 4.675Q15.7 5.75 15.7 7.3V9.3H17.2Q17.825 9.3 18.262 9.737Q18.7 10.175 18.7 10.8V19.2Q18.7 19.825 18.262 20.262Q17.825 20.7 17.2 20.7H6.8Q6.175 20.7 5.738 20.262Q5.3 19.825 5.3 19.2V10.8Q5.3 10.175 5.738 9.737Q6.175 9.3 6.8 9.3H8.3V7.3Q8.3 5.75 9.375 4.675Q10.45 3.6 12 3.6ZM12 4.3Q10.75 4.3 9.875 5.175Q9 6.05 9 7.3V9.3H15V7.3Q15 6.05 14.125 5.175Q13.25 4.3 12 4.3ZM12 13.65Q11.425 13.65 11.038 14.037Q10.65 14.425 10.65 15Q10.65 15.575 11.038 15.963Q11.425 16.35 12 16.35Q12.575 16.35 12.963 15.963Q13.35 15.575 13.35 15Q13.35 14.425 12.963 14.037Q12.575 13.65 12 13.65Z"/>
    </Icon>
  );
});

IconMaterialLockRoundedW100Filled.displayName = 'AmauiIconMaterialLockRoundedW100Filled';

export default IconMaterialLockRoundedW100Filled;
