import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiTetheringRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTetheringRounded'
      short_name='WifiTethering'

      {...props}
    >
      <path d="M12 15Q11.175 15 10.588 14.412Q10 13.825 10 13Q10 12.175 10.588 11.587Q11.175 11 12 11Q12.825 11 13.413 11.587Q14 12.175 14 13Q14 13.825 13.413 14.412Q12.825 15 12 15ZM7.25 16.675Q6.675 15.9 6.338 14.975Q6 14.05 6 13Q6 10.5 7.75 8.75Q9.5 7 12 7Q14.5 7 16.25 8.75Q18 10.5 18 13Q18 14.05 17.663 15Q17.325 15.95 16.75 16.7Q16.5 17.025 16.087 17.025Q15.675 17.025 15.35 16.7Q15.075 16.425 15.062 16.025Q15.05 15.625 15.3 15.25Q15.65 14.75 15.825 14.188Q16 13.625 16 13Q16 11.35 14.825 10.175Q13.65 9 12 9Q10.35 9 9.175 10.175Q8 11.35 8 13Q8 13.65 8.188 14.2Q8.375 14.75 8.7 15.25Q8.95 15.625 8.925 16.038Q8.9 16.45 8.625 16.725Q8.325 17.025 7.913 17.012Q7.5 17 7.25 16.675ZM4.425 19.525Q3.3 18.2 2.65 16.538Q2 14.875 2 13Q2 10.925 2.788 9.1Q3.575 7.275 4.925 5.925Q6.275 4.575 8.1 3.787Q9.925 3 12 3Q14.075 3 15.9 3.787Q17.725 4.575 19.075 5.925Q20.425 7.275 21.212 9.1Q22 10.925 22 13Q22 14.875 21.35 16.55Q20.7 18.225 19.575 19.55Q19.3 19.85 18.9 19.85Q18.5 19.85 18.2 19.55Q17.925 19.275 17.913 18.862Q17.9 18.45 18.175 18.125Q19.025 17.075 19.513 15.775Q20 14.475 20 13Q20 9.65 17.675 7.325Q15.35 5 12 5Q8.65 5 6.325 7.325Q4 9.65 4 13Q4 14.475 4.488 15.762Q4.975 17.05 5.85 18.1Q6.125 18.425 6.113 18.837Q6.1 19.25 5.8 19.55Q5.5 19.85 5.1 19.837Q4.7 19.825 4.425 19.525Z"/>
    </Icon>
  );
});

export default IconMaterialWifiTetheringRounded;
