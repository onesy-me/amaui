import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolicyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyRounded'
      short_name='Policy'

      {...props}
    >
      <path d="M12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM12 19.9Q13.025 19.625 14.038 18.887Q15.05 18.15 15.8 17.25L14 15.45Q13.55 15.725 13.038 15.863Q12.525 16 12 16Q10.35 16 9.175 14.825Q8 13.65 8 12Q8 10.35 9.175 9.175Q10.35 8 12 8Q13.65 8 14.825 9.175Q16 10.35 16 12Q16 12.55 15.863 13.062Q15.725 13.575 15.45 14.05L16.95 15.55Q17.45 14.525 17.725 13.4Q18 12.275 18 11.1V6.375Q18 6.375 18 6.375Q18 6.375 18 6.375L12 4.125Q12 4.125 12 4.125Q12 4.125 12 4.125L6 6.375Q6 6.375 6 6.375Q6 6.375 6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9ZM12 21.85Q11.725 21.85 11.488 21.812Q11.25 21.775 11.05 21.7Q7.95 20.55 5.975 17.6Q4 14.65 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.65 18.025 17.6Q16.05 20.55 12.95 21.7Q12.75 21.775 12.512 21.812Q12.275 21.85 12 21.85ZM12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Q12.2 12 12.2 12Z"/>
    </Icon>
  );
});

IconMaterialPolicyRounded.displayName = 'AmauiIconMaterialPolicyRounded';

export default IconMaterialPolicyRounded;
