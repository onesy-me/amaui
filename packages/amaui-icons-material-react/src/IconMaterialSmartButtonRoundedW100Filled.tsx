import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartButtonRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonRoundedW100Filled'
      short_name='SmartButton'

      {...props}
    >
      <path d="M4.15 16.35Q3.525 16.35 3.088 15.913Q2.65 15.475 2.65 14.85V9.15Q2.65 8.525 3.088 8.087Q3.525 7.65 4.15 7.65H19.85Q20.475 7.65 20.913 8.087Q21.35 8.525 21.35 9.15V14.85Q21.35 15.475 20.913 15.913Q20.475 16.35 19.85 16.35H19.15V15.65H19.85Q20.2 15.65 20.425 15.425Q20.65 15.2 20.65 14.85V9.15Q20.65 8.8 20.425 8.575Q20.2 8.35 19.85 8.35H4.15Q3.8 8.35 3.575 8.575Q3.35 8.8 3.35 9.15V14.85Q3.35 15.2 3.575 15.425Q3.8 15.65 4.15 15.65H9.85V16.35ZM14.2 17.525 13.675 16.325 12.475 15.8Q12.2 15.675 12.2 15.5Q12.2 15.325 12.475 15.2L13.675 14.675L14.2 13.475Q14.325 13.2 14.5 13.2Q14.675 13.2 14.8 13.475L15.325 14.675L16.525 15.2Q16.8 15.325 16.8 15.5Q16.8 15.675 16.525 15.8L15.325 16.325L14.8 17.525Q14.675 17.8 14.5 17.8Q14.325 17.8 14.2 17.525ZM16.75 13.45 16.375 12.625 15.55 12.25Q15.325 12.15 15.325 12Q15.325 11.85 15.55 11.75L16.375 11.375L16.75 10.55Q16.85 10.325 17 10.325Q17.15 10.325 17.25 10.55L17.625 11.375L18.45 11.75Q18.675 11.85 18.675 12Q18.675 12.15 18.45 12.25L17.625 12.625L17.25 13.45Q17.15 13.675 17 13.675Q16.85 13.675 16.75 13.45Z"/>
    </Icon>
  );
});

export default IconMaterialSmartButtonRoundedW100Filled;
