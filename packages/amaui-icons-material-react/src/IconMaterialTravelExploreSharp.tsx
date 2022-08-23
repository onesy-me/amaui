import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTravelExploreSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelExploreSharp'
      short_name='TravelExplore'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q15.65 2 18.387 4.287Q21.125 6.575 21.8 10.025H19.75Q19.275 8.2 18.038 6.762Q16.8 5.325 15 4.6V5Q15 5.825 14.413 6.412Q13.825 7 13 7H11V9Q11 9.425 10.713 9.712Q10.425 10 10 10H8V12H10V15H9L4.2 10.2Q4.125 10.65 4.062 11.1Q4 11.55 4 12Q4 15.275 6.3 17.625Q8.6 19.975 12 20ZM21.1 21.5 17.9 18.3Q17.375 18.6 16.775 18.8Q16.175 19 15.5 19Q13.625 19 12.312 17.688Q11 16.375 11 14.5Q11 12.625 12.312 11.312Q13.625 10 15.5 10Q17.375 10 18.688 11.312Q20 12.625 20 14.5Q20 15.175 19.8 15.775Q19.6 16.375 19.3 16.9L22.5 20.1ZM15.5 17Q16.55 17 17.275 16.275Q18 15.55 18 14.5Q18 13.45 17.275 12.725Q16.55 12 15.5 12Q14.45 12 13.725 12.725Q13 13.45 13 14.5Q13 15.55 13.725 16.275Q14.45 17 15.5 17Z"/>
    </Icon>
  );
});

IconMaterialTravelExploreSharp.displayName = 'AmauiIconMaterialTravelExploreSharp';

export default IconMaterialTravelExploreSharp;
