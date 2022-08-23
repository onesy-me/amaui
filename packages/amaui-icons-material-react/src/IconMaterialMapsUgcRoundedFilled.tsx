import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapsUgcRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgcRoundedFilled'
      short_name='MapsUgc'

      {...props}
    >
      <path d="M1.525 21.25 2.975 16.3Q2.5 15.275 2.263 14.2Q2.025 13.125 2.025 12Q2.025 9.925 2.812 8.1Q3.6 6.275 4.95 4.925Q6.3 3.575 8.125 2.787Q9.95 2 12.025 2Q14.1 2 15.925 2.787Q17.75 3.575 19.1 4.925Q20.45 6.275 21.238 8.1Q22.025 9.925 22.025 12Q22.025 14.075 21.238 15.9Q20.45 17.725 19.1 19.075Q17.75 20.425 15.925 21.212Q14.1 22 12.025 22Q10.9 22 9.825 21.762Q8.75 21.525 7.725 21.05L2.775 22.5Q2.2 22.675 1.775 22.25Q1.35 21.825 1.525 21.25ZM12.025 16Q12.45 16 12.738 15.712Q13.025 15.425 13.025 15V13H15.025Q15.45 13 15.738 12.712Q16.025 12.425 16.025 12Q16.025 11.575 15.738 11.287Q15.45 11 15.025 11H13.025V9Q13.025 8.575 12.738 8.287Q12.45 8 12.025 8Q11.6 8 11.312 8.287Q11.025 8.575 11.025 9V11H9.025Q8.6 11 8.312 11.287Q8.025 11.575 8.025 12Q8.025 12.425 8.312 12.712Q8.6 13 9.025 13H11.025V15Q11.025 15.425 11.312 15.712Q11.6 16 12.025 16Z"/>
    </Icon>
  );
});

IconMaterialMapsUgcRoundedFilled.displayName = 'AmauiIconMaterialMapsUgcRoundedFilled';

export default IconMaterialMapsUgcRoundedFilled;
