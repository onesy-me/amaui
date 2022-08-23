import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleUpRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleUpRoundedFilled'
      short_name='ArrowCircleUp'

      {...props}
    >
      <path d="M12 16Q12.425 16 12.713 15.712Q13 15.425 13 15V11.8L13.9 12.7Q14.175 12.975 14.6 12.975Q15.025 12.975 15.3 12.7Q15.575 12.425 15.575 12Q15.575 11.575 15.3 11.3L12.7 8.7Q12.55 8.55 12.375 8.487Q12.2 8.425 12 8.425Q11.8 8.425 11.625 8.487Q11.45 8.55 11.3 8.7L8.7 11.3Q8.425 11.575 8.425 12Q8.425 12.425 8.7 12.7Q8.975 12.975 9.4 12.975Q9.825 12.975 10.1 12.7L11 11.8V15Q11 15.425 11.288 15.712Q11.575 16 12 16ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleUpRoundedFilled.displayName = 'AmauiIconMaterialArrowCircleUpRoundedFilled';

export default IconMaterialArrowCircleUpRoundedFilled;
