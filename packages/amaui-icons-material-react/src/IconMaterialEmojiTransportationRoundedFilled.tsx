import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiTransportationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiTransportationRoundedFilled'
      short_name='EmojiTransportation'

      {...props}
    >
      <path d="M11 22Q10.575 22 10.288 21.712Q10 21.425 10 21V15.775Q10 15.725 10.05 15.525L11.4 11.65Q11.525 11.375 11.762 11.188Q12 11 12.35 11H19.65Q20 11 20.238 11.188Q20.475 11.375 20.6 11.65L21.95 15.525Q21.95 15.525 22 15.775V21Q22 21.425 21.712 21.712Q21.425 22 21 22Q20.575 22 20.288 21.712Q20 21.425 20 21V20.5H12V21Q12 21.425 11.713 21.712Q11.425 22 11 22ZM12 14.5H20L19.3 12.5H12.7ZM13 18.5Q13.425 18.5 13.713 18.212Q14 17.925 14 17.5Q14 17.075 13.713 16.788Q13.425 16.5 13 16.5Q12.575 16.5 12.288 16.788Q12 17.075 12 17.5Q12 17.925 12.288 18.212Q12.575 18.5 13 18.5ZM19 18.5Q19.425 18.5 19.712 18.212Q20 17.925 20 17.5Q20 17.075 19.712 16.788Q19.425 16.5 19 16.5Q18.575 16.5 18.288 16.788Q18 17.075 18 17.5Q18 17.925 18.288 18.212Q18.575 18.5 19 18.5ZM6 14V12H8V14ZM11 8V6H13V8ZM6 18V16H8V18ZM6 22V20H8V22ZM2 22V10Q2 9.175 2.588 8.587Q3.175 8 4 8H7V4Q7 3.175 7.588 2.587Q8.175 2 9 2H15Q15.825 2 16.413 2.587Q17 3.175 17 4V9H15V4H9V10H4V22Z"/>
    </Icon>
  );
});

IconMaterialEmojiTransportationRoundedFilled.displayName = 'AmauiIconMaterialEmojiTransportationRoundedFilled';

export default IconMaterialEmojiTransportationRoundedFilled;
