import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrapTextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextRounded'
      short_name='WrapText'

      {...props}
    >
      <path d="M5 12.5Q4.575 12.5 4.287 12.212Q4 11.925 4 11.5Q4 11.075 4.287 10.787Q4.575 10.5 5 10.5H17.25Q18.825 10.5 19.913 11.587Q21 12.675 21 14.25Q21 15.825 19.913 16.913Q18.825 18 17.25 18H14.85L15.4 18.55Q15.7 18.85 15.7 19.263Q15.7 19.675 15.4 19.975Q15.1 20.275 14.688 20.275Q14.275 20.275 13.975 19.975L11.7 17.7Q11.55 17.55 11.488 17.375Q11.425 17.2 11.425 17Q11.425 16.8 11.488 16.625Q11.55 16.45 11.7 16.3L14 14Q14.275 13.725 14.688 13.725Q15.1 13.725 15.4 14.025Q15.7 14.325 15.688 14.75Q15.675 15.175 15.375 15.475L14.85 16H17.25Q17.975 16 18.488 15.488Q19 14.975 19 14.25Q19 13.525 18.488 13.012Q17.975 12.5 17.25 12.5ZM5 7Q4.575 7 4.287 6.713Q4 6.425 4 6Q4 5.575 4.287 5.287Q4.575 5 5 5H19Q19.425 5 19.712 5.287Q20 5.575 20 6Q20 6.425 19.712 6.713Q19.425 7 19 7ZM5 18Q4.575 18 4.287 17.712Q4 17.425 4 17Q4 16.575 4.287 16.288Q4.575 16 5 16H8.025Q8.45 16 8.725 16.288Q9 16.575 9 17Q9 17.425 8.713 17.712Q8.425 18 8 18Z"/>
    </Icon>
  );
});

IconMaterialWrapTextRounded.displayName = 'AmauiIconMaterialWrapTextRounded';

export default IconMaterialWrapTextRounded;
