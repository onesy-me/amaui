import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeckRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckRoundedW100Filled'
      short_name='Deck'

      {...props}
    >
      <path d="M12 21.35Q11.85 21.35 11.75 21.25Q11.65 21.15 11.65 21V8.35H5.325Q5.025 8.35 4.938 8.075Q4.85 7.8 5.1 7.625L11.6 3.075Q11.8 2.95 12 2.95Q12.2 2.95 12.4 3.075L18.9 7.625Q19.15 7.8 19.062 8.075Q18.975 8.35 18.675 8.35H12.35V21Q12.35 21.15 12.25 21.25Q12.15 21.35 12 21.35ZM4 21.35Q3.85 21.35 3.75 21.25Q3.65 21.15 3.65 21V16.2L3.025 12.7Q3 12.55 3.075 12.438Q3.15 12.325 3.3 12.3Q3.45 12.275 3.562 12.362Q3.675 12.45 3.7 12.575L4.35 16.15H7.6Q7.925 16.15 8.137 16.362Q8.35 16.575 8.35 16.9V21Q8.35 21.15 8.25 21.25Q8.15 21.35 8 21.35Q7.85 21.35 7.75 21.25Q7.65 21.15 7.65 21V16.85H4.35V21Q4.35 21.15 4.25 21.25Q4.15 21.35 4 21.35ZM16 21.35Q15.85 21.35 15.75 21.25Q15.65 21.15 15.65 21V16.9Q15.65 16.575 15.863 16.362Q16.075 16.15 16.4 16.15H19.65L20.3 12.575Q20.325 12.45 20.425 12.362Q20.525 12.275 20.675 12.3Q20.825 12.325 20.913 12.438Q21 12.55 20.975 12.7L20.35 16.2V21Q20.35 21.15 20.25 21.25Q20.15 21.35 20 21.35Q19.85 21.35 19.75 21.25Q19.65 21.15 19.65 21V16.85H16.35V21Q16.35 21.15 16.25 21.25Q16.15 21.35 16 21.35Z"/>
    </Icon>
  );
});

export default IconMaterialDeckRoundedW100Filled;
