import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChromeReaderModeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeRoundedFilled'
      short_name='ChromeReaderMode'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM13 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H13ZM14.75 10H18.275Q18.575 10 18.788 9.775Q19 9.55 19 9.25Q19 8.925 18.788 8.712Q18.575 8.5 18.25 8.5H14.725Q14.425 8.5 14.213 8.725Q14 8.95 14 9.25Q14 9.575 14.213 9.787Q14.425 10 14.75 10ZM14.75 12.5H18.275Q18.575 12.5 18.788 12.275Q19 12.05 19 11.75Q19 11.425 18.788 11.212Q18.575 11 18.25 11H14.725Q14.425 11 14.213 11.225Q14 11.45 14 11.75Q14 12.075 14.213 12.287Q14.425 12.5 14.75 12.5ZM14.75 15H18.275Q18.575 15 18.788 14.775Q19 14.55 19 14.25Q19 13.925 18.788 13.712Q18.575 13.5 18.25 13.5H14.725Q14.425 13.5 14.213 13.725Q14 13.95 14 14.25Q14 14.575 14.213 14.787Q14.425 15 14.75 15Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeRoundedFilled.displayName = 'AmauiIconMaterialChromeReaderModeRoundedFilled';

export default IconMaterialChromeReaderModeRoundedFilled;
