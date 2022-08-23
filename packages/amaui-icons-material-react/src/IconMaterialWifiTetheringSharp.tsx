import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiTetheringSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTetheringSharp'
      short_name='WifiTethering'

      {...props}
    >
      <path d="M12 15Q11.175 15 10.588 14.412Q10 13.825 10 13Q10 12.175 10.588 11.587Q11.175 11 12 11Q12.825 11 13.413 11.587Q14 12.175 14 13Q14 13.825 13.413 14.412Q12.825 15 12 15ZM7.925 17.425Q7.05 16.6 6.525 15.463Q6 14.325 6 13Q6 10.5 7.75 8.75Q9.5 7 12 7Q14.5 7 16.25 8.75Q18 10.5 18 13Q18 14.325 17.475 15.475Q16.95 16.625 16.075 17.425L14.65 16Q15.275 15.425 15.637 14.65Q16 13.875 16 13Q16 11.35 14.825 10.175Q13.65 9 12 9Q10.35 9 9.175 10.175Q8 11.35 8 13Q8 13.9 8.363 14.662Q8.725 15.425 9.35 16ZM5.1 20.25Q3.675 18.875 2.838 17.012Q2 15.15 2 13Q2 10.925 2.788 9.1Q3.575 7.275 4.925 5.925Q6.275 4.575 8.1 3.787Q9.925 3 12 3Q14.075 3 15.9 3.787Q17.725 4.575 19.075 5.925Q20.425 7.275 21.212 9.1Q22 10.925 22 13Q22 15.15 21.163 17.025Q20.325 18.9 18.9 20.25L17.5 18.85Q18.65 17.75 19.325 16.238Q20 14.725 20 13Q20 9.65 17.675 7.325Q15.35 5 12 5Q8.65 5 6.325 7.325Q4 9.65 4 13Q4 14.725 4.675 16.225Q5.35 17.725 6.525 18.825Z"/>
    </Icon>
  );
});

IconMaterialWifiTetheringSharp.displayName = 'AmauiIconMaterialWifiTetheringSharp';

export default IconMaterialWifiTetheringSharp;
