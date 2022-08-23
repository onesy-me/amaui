import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStormRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StormRounded'
      short_name='Storm'

      {...props}
    >
      <path d="M19.575 22Q19 22 18.712 21.613Q18.425 21.225 18.6 20.65Q18.95 19.375 19.1 18.1Q19.25 16.825 19.15 15.55Q18.2 17.6 16.25 18.8Q14.3 20 12 20Q9.9 20 8.2 19.012Q6.5 18.025 5.3 16.375Q4.1 14.725 3.45 12.587Q2.8 10.45 2.8 8.15Q2.8 6.725 2.963 5.337Q3.125 3.95 3.55 2.6Q3.625 2.35 3.875 2.175Q4.125 2 4.4 2Q4.975 2 5.275 2.4Q5.575 2.8 5.4 3.375Q5.05 4.625 4.9 5.887Q4.75 7.15 4.85 8.45Q5.825 6.375 7.763 5.188Q9.7 4 12 4Q14.1 4 15.8 4.987Q17.5 5.975 18.7 7.612Q19.9 9.25 20.55 11.387Q21.2 13.525 21.2 15.85Q21.2 17.25 21.038 18.637Q20.875 20.025 20.45 21.375Q20.375 21.65 20.125 21.825Q19.875 22 19.575 22ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18ZM12 16Q13.65 16 14.825 14.825Q16 13.65 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialStormRounded.displayName = 'AmauiIconMaterialStormRounded';

export default IconMaterialStormRounded;
