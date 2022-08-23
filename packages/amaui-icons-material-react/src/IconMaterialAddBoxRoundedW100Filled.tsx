import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBoxRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxRoundedW100Filled'
      short_name='AddBox'

      {...props}
    >
      <path d="M12 16.35Q12.15 16.35 12.25 16.25Q12.35 16.15 12.35 16V12.35H16Q16.15 12.35 16.25 12.25Q16.35 12.15 16.35 12Q16.35 11.85 16.25 11.75Q16.15 11.65 16 11.65H12.35V8Q12.35 7.85 12.25 7.75Q12.15 7.65 12 7.65Q11.85 7.65 11.75 7.75Q11.65 7.85 11.65 8V11.65H8Q7.85 11.65 7.75 11.75Q7.65 11.85 7.65 12Q7.65 12.15 7.75 12.25Q7.85 12.35 8 12.35H11.65V16Q11.65 16.15 11.75 16.25Q11.85 16.35 12 16.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialAddBoxRoundedW100Filled.displayName = 'AmauiIconMaterialAddBoxRoundedW100Filled';

export default IconMaterialAddBoxRoundedW100Filled;
