import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCachedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CachedRoundedFilled'
      short_name='Cached'

      {...props}
    >
      <path d="M12.05 20Q8.7 20 6.35 17.675Q4 15.35 4 12V11.825L3.1 12.725Q2.825 13 2.4 13Q1.975 13 1.7 12.725Q1.425 12.45 1.425 12.025Q1.425 11.6 1.7 11.325L4.3 8.725Q4.45 8.575 4.625 8.512Q4.8 8.45 5 8.45Q5.2 8.45 5.375 8.512Q5.55 8.575 5.7 8.725L8.3 11.325Q8.575 11.6 8.575 12.025Q8.575 12.45 8.3 12.725Q8.025 13 7.6 13Q7.175 13 6.9 12.725L6 11.825V12Q6 14.5 7.763 16.25Q9.525 18 12.05 18Q12.55 18 13.025 17.913Q13.5 17.825 13.975 17.65Q14.225 17.55 14.513 17.6Q14.8 17.65 15 17.85Q15.45 18.3 15.363 18.812Q15.275 19.325 14.7 19.525Q14.05 19.75 13.388 19.875Q12.725 20 12.05 20ZM19 15.55Q18.8 15.55 18.625 15.487Q18.45 15.425 18.3 15.275L15.7 12.675Q15.425 12.4 15.425 11.975Q15.425 11.55 15.7 11.275Q15.975 11 16.4 11Q16.825 11 17.1 11.275L18 12.175V12Q18 9.5 16.238 7.75Q14.475 6 11.95 6Q11.45 6 10.975 6.088Q10.5 6.175 10.025 6.35Q9.775 6.45 9.488 6.4Q9.2 6.35 9 6.15Q8.55 5.7 8.637 5.187Q8.725 4.675 9.3 4.475Q9.95 4.25 10.613 4.125Q11.275 4 11.95 4Q15.3 4 17.65 6.325Q20 8.65 20 12V12.175L20.9 11.275Q21.175 11 21.6 11Q22.025 11 22.3 11.275Q22.575 11.55 22.575 11.975Q22.575 12.4 22.3 12.675L19.7 15.275Q19.55 15.425 19.375 15.487Q19.2 15.55 19 15.55Z"/>
    </Icon>
  );
});

IconMaterialCachedRoundedFilled.displayName = 'AmauiIconMaterialCachedRoundedFilled';

export default IconMaterialCachedRoundedFilled;
