import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapVerticalCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVerticalCircleRoundedFilled'
      short_name='SwapVerticalCircle'

      {...props}
    >
      <path d="M14 11Q13.575 11 13.288 11.287Q13 11.575 13 12V15.15L12.1 14.275Q11.8 14 11.4 14Q11 14 10.7 14.3Q10.425 14.575 10.425 15Q10.425 15.425 10.7 15.7L13.3 18.3Q13.575 18.575 14 18.575Q14.425 18.575 14.7 18.3L17.325 15.675Q17.6 15.4 17.6 15Q17.6 14.6 17.3 14.3Q17.025 14.025 16.6 14.012Q16.175 14 15.9 14.3L15 15.15V11.975Q15 11.55 14.713 11.275Q14.425 11 14 11ZM10 13Q10.425 13 10.713 12.712Q11 12.425 11 12V8.85L11.9 9.725Q12.2 10 12.6 10Q13 10 13.3 9.7Q13.575 9.425 13.575 9Q13.575 8.575 13.3 8.3L10.7 5.7Q10.425 5.425 10 5.425Q9.575 5.425 9.3 5.7L6.675 8.325Q6.4 8.6 6.4 9Q6.4 9.4 6.7 9.7Q6.975 9.975 7.4 9.988Q7.825 10 8.1 9.7L9 8.85V12.025Q9 12.45 9.288 12.725Q9.575 13 10 13ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSwapVerticalCircleRoundedFilled.displayName = 'AmauiIconMaterialSwapVerticalCircleRoundedFilled';

export default IconMaterialSwapVerticalCircleRoundedFilled;
