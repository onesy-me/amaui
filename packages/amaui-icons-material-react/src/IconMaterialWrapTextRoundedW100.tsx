import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrapTextRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextRoundedW100'
      short_name='WrapText'

      {...props}
    >
      <path d="M5 11.85Q4.85 11.85 4.75 11.75Q4.65 11.65 4.65 11.5Q4.65 11.35 4.75 11.25Q4.85 11.15 5 11.15H17.25Q18.525 11.15 19.438 12.062Q20.35 12.975 20.35 14.25Q20.35 15.525 19.438 16.438Q18.525 17.35 17.25 17.35H13.25L14.975 19.075Q15.075 19.175 15.075 19.3Q15.075 19.425 14.95 19.55Q14.825 19.675 14.7 19.675Q14.575 19.675 14.45 19.55L12.425 17.525Q12.3 17.4 12.25 17.275Q12.2 17.15 12.2 17Q12.2 16.85 12.25 16.725Q12.3 16.6 12.425 16.475L14.475 14.425Q14.575 14.325 14.7 14.325Q14.825 14.325 14.95 14.45Q15.075 14.575 15.075 14.7Q15.075 14.825 14.95 14.95L13.25 16.65H17.25Q18.25 16.65 18.95 15.95Q19.65 15.25 19.65 14.25Q19.65 13.25 18.95 12.55Q18.25 11.85 17.25 11.85ZM5 6.35Q4.85 6.35 4.75 6.25Q4.65 6.15 4.65 6Q4.65 5.85 4.75 5.75Q4.85 5.65 5 5.65H19Q19.15 5.65 19.25 5.75Q19.35 5.85 19.35 6Q19.35 6.15 19.25 6.25Q19.15 6.35 19 6.35ZM5 17.35Q4.85 17.35 4.75 17.25Q4.65 17.15 4.65 17Q4.65 16.85 4.75 16.75Q4.85 16.65 5 16.65H8.025Q8.15 16.65 8.25 16.75Q8.35 16.85 8.35 17Q8.35 17.15 8.25 17.25Q8.15 17.35 8 17.35Z"/>
    </Icon>
  );
});

export default IconMaterialWrapTextRoundedW100;
