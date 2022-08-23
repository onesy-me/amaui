import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdsClickRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdsClickRoundedFilled'
      short_name='AdsClick'

      {...props}
    >
      <path d="M11.7 18Q9.3 17.875 7.65 16.15Q6 14.425 6 12Q6 9.5 7.75 7.75Q9.5 6 12 6Q14.425 6 16.15 7.65Q17.875 9.3 18 11.7L15.9 11.075Q15.575 9.725 14.5 8.863Q13.425 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.425 8.863 14.5Q9.725 15.575 11.075 15.9ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 12.225 22 12.45Q22 12.675 21.95 12.9L20 12.3V12Q20 8.65 17.675 6.325Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20H12.3L12.9 21.95Q12.675 22 12.45 22Q12.225 22 12 22ZM20.175 22.15 16.25 18.225 15.5 20.5Q15.375 20.85 15.025 20.837Q14.675 20.825 14.55 20.475L12.275 12.9Q12.175 12.625 12.4 12.4Q12.625 12.175 12.9 12.275L20.475 14.55Q20.825 14.675 20.838 15.025Q20.85 15.375 20.5 15.5L18.225 16.25L22.15 20.175Q22.3 20.325 22.3 20.525Q22.3 20.725 22.15 20.875L20.875 22.15Q20.725 22.3 20.525 22.3Q20.325 22.3 20.175 22.15Z"/>
    </Icon>
  );
});

IconMaterialAdsClickRoundedFilled.displayName = 'AmauiIconMaterialAdsClickRoundedFilled';

export default IconMaterialAdsClickRoundedFilled;
