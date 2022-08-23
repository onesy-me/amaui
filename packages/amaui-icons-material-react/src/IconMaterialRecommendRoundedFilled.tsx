import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecommendRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecommendRoundedFilled'
      short_name='Recommend'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM9 18H14.5Q14.925 18 15.288 17.788Q15.65 17.575 15.8 17.2L17.9 12.3Q17.95 12.175 17.975 12.05Q18 11.925 18 11.8V11Q18 10.575 17.712 10.287Q17.425 10 17 10H12.4L13 6.6V6.4Q13 6.2 12.925 6.025Q12.85 5.85 12.7 5.7L12 5L7.4 10Q7.2 10.2 7.1 10.45Q7 10.7 7 11V16Q7 16.825 7.588 17.413Q8.175 18 9 18Z"/>
    </Icon>
  );
});

IconMaterialRecommendRoundedFilled.displayName = 'AmauiIconMaterialRecommendRoundedFilled';

export default IconMaterialRecommendRoundedFilled;
