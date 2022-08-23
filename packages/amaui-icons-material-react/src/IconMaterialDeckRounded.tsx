import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeckRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckRounded'
      short_name='Deck'

      {...props}
    >
      <path d="M12 22Q11.575 22 11.288 21.712Q11 21.425 11 21V9H3.575Q3.2 9 3.1 8.65Q3 8.3 3.3 8.1L10.85 2.8Q11.375 2.45 12 2.45Q12.625 2.45 13.15 2.8L20.7 8.1Q21 8.3 20.9 8.65Q20.8 9 20.425 9H13V21Q13 21.425 12.713 21.712Q12.425 22 12 22ZM12 7H15.65H8.35ZM4 22Q3.575 22 3.288 21.712Q3 21.425 3 21V16.75L2.375 13.325Q2.3 12.9 2.525 12.575Q2.75 12.25 3.175 12.175Q3.575 12.1 3.913 12.337Q4.25 12.575 4.325 12.975L4.9 16H8Q8.425 16 8.713 16.288Q9 16.575 9 17V21Q9 21.425 8.713 21.712Q8.425 22 8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V18H5V21Q5 21.425 4.713 21.712Q4.425 22 4 22ZM16 22Q15.575 22 15.288 21.712Q15 21.425 15 21V17Q15 16.575 15.288 16.288Q15.575 16 16 16H19.1L19.675 12.975Q19.75 12.575 20.087 12.337Q20.425 12.1 20.825 12.175Q21.25 12.25 21.475 12.575Q21.7 12.9 21.625 13.325L21 16.75V21Q21 21.425 20.712 21.712Q20.425 22 20 22Q19.575 22 19.288 21.712Q19 21.425 19 21V18H17V21Q17 21.425 16.712 21.712Q16.425 22 16 22ZM8.35 7H15.65L12 4.45Z"/>
    </Icon>
  );
});

IconMaterialDeckRounded.displayName = 'AmauiIconMaterialDeckRounded';

export default IconMaterialDeckRounded;
