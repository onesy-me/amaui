import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInputRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputRoundedW100Filled'
      short_name='Input'

      {...props}
    >
      <path d="M11.75 14.85Q11.625 14.725 11.625 14.6Q11.625 14.475 11.75 14.35L13.75 12.35H3.65Q3.5 12.35 3.4 12.25Q3.3 12.15 3.3 12Q3.3 11.85 3.4 11.75Q3.5 11.65 3.65 11.65H13.75L11.725 9.625Q11.625 9.525 11.625 9.4Q11.625 9.275 11.75 9.15Q11.875 9.025 12 9.025Q12.125 9.025 12.25 9.15L14.575 11.475Q14.7 11.6 14.75 11.725Q14.8 11.85 14.8 12Q14.8 12.15 14.75 12.275Q14.7 12.4 14.575 12.525L12.225 14.875Q12.125 14.975 12 14.975Q11.875 14.975 11.75 14.85ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V15.7Q3.3 15.55 3.4 15.45Q3.5 15.35 3.65 15.35Q3.8 15.35 3.9 15.45Q4 15.55 4 15.7V17.2Q4 17.5 4.25 17.75Q4.5 18 4.8 18H19.2Q19.5 18 19.75 17.75Q20 17.5 20 17.2V6.8Q20 6.5 19.75 6.25Q19.5 6 19.2 6H4.8Q4.5 6 4.25 6.25Q4 6.5 4 6.8V8.3Q4 8.45 3.9 8.55Q3.8 8.65 3.65 8.65Q3.5 8.65 3.4 8.55Q3.3 8.45 3.3 8.3V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialInputRoundedW100Filled.displayName = 'AmauiIconMaterialInputRoundedW100Filled';

export default IconMaterialInputRoundedW100Filled;
