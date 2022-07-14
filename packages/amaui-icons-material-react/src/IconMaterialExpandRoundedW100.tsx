import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandRoundedW100'
      short_name='Expand'

      {...props}
    >
      <path d="M5 21.35Q4.85 21.35 4.75 21.25Q4.65 21.15 4.65 21Q4.65 20.85 4.75 20.75Q4.85 20.65 5 20.65H19Q19.15 20.65 19.25 20.75Q19.35 20.85 19.35 21Q19.35 21.15 19.25 21.25Q19.15 21.35 19 21.35ZM5 3.35Q4.85 3.35 4.75 3.25Q4.65 3.15 4.65 3Q4.65 2.85 4.75 2.75Q4.85 2.65 5 2.65H19Q19.15 2.65 19.25 2.75Q19.35 2.85 19.35 3Q19.35 3.15 19.25 3.25Q19.15 3.35 19 3.35ZM12 17.8Q11.85 17.8 11.725 17.75Q11.6 17.7 11.475 17.575L9.125 15.225Q9.025 15.125 9.025 15Q9.025 14.875 9.15 14.75Q9.275 14.625 9.4 14.625Q9.525 14.625 9.65 14.75L11.65 16.75V7.25L9.625 9.275Q9.525 9.375 9.4 9.375Q9.275 9.375 9.15 9.25Q9.025 9.125 9.025 9Q9.025 8.875 9.15 8.75L11.475 6.425Q11.6 6.3 11.725 6.25Q11.85 6.2 12 6.2Q12.15 6.2 12.275 6.25Q12.4 6.3 12.525 6.425L14.875 8.775Q14.975 8.875 14.975 9Q14.975 9.125 14.85 9.25Q14.725 9.375 14.6 9.375Q14.475 9.375 14.35 9.25L12.35 7.25V16.75L14.375 14.725Q14.475 14.625 14.6 14.625Q14.725 14.625 14.85 14.75Q14.975 14.875 14.975 15Q14.975 15.125 14.85 15.25L12.525 17.575Q12.4 17.7 12.275 17.75Q12.15 17.8 12 17.8Z"/>
    </Icon>
  );
});

export default IconMaterialExpandRoundedW100;
