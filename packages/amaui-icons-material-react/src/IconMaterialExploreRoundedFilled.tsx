import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExploreRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreRoundedFilled'
      short_name='Explore'

      {...props}
    >
      <path d="M7.425 17.075 13.675 14.15Q13.825 14.075 13.95 13.95Q14.075 13.825 14.15 13.675L17.075 7.425Q17.175 7.2 16.988 7.012Q16.8 6.825 16.575 6.925L10.325 9.85Q10.175 9.925 10.05 10.05Q9.925 10.175 9.85 10.325L6.925 16.575Q6.825 16.8 7.013 16.988Q7.2 17.175 7.425 17.075ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11Q12.425 11 12.713 11.287Q13 11.575 13 12Q13 12.425 12.713 12.712Q12.425 13 12 13ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialExploreRoundedFilled.displayName = 'AmauiIconMaterialExploreRoundedFilled';

export default IconMaterialExploreRoundedFilled;
