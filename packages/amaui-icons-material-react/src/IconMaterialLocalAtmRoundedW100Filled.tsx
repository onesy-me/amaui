import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalAtmRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmRoundedW100Filled'
      short_name='LocalAtm'

      {...props}
    >
      <path d="M10 15.35H11.65V16Q11.65 16.15 11.75 16.25Q11.85 16.35 12 16.35Q12.15 16.35 12.25 16.25Q12.35 16.15 12.35 16V15.35H13.65Q13.95 15.35 14.15 15.15Q14.35 14.95 14.35 14.65V12.35Q14.35 12.05 14.15 11.85Q13.95 11.65 13.65 11.65H10.35V9.35H14Q14.15 9.35 14.25 9.25Q14.35 9.15 14.35 9Q14.35 8.85 14.25 8.75Q14.15 8.65 14 8.65H12.35V8Q12.35 7.85 12.25 7.75Q12.15 7.65 12 7.65Q11.85 7.65 11.75 7.75Q11.65 7.85 11.65 8V8.65H10.35Q10.05 8.65 9.85 8.85Q9.65 9.05 9.65 9.35V11.65Q9.65 11.95 9.85 12.15Q10.05 12.35 10.35 12.35H13.65V14.65H10Q9.85 14.65 9.75 14.75Q9.65 14.85 9.65 15Q9.65 15.15 9.75 15.25Q9.85 15.35 10 15.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialLocalAtmRoundedW100Filled.displayName = 'AmauiIconMaterialLocalAtmRoundedW100Filled';

export default IconMaterialLocalAtmRoundedW100Filled;
