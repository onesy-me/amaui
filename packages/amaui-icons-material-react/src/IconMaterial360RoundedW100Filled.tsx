import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial360RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='360RoundedW100Filled'
      short_name='360'

      {...props}
    >
      <path d="M8.15 18.1Q8.025 17.975 8.025 17.85Q8.025 17.725 8.15 17.6L10.15 15.6Q7.325 15.225 5.312 14.238Q3.3 13.25 3.3 12Q3.3 10.525 5.838 9.412Q8.375 8.3 12 8.3Q15.625 8.3 18.163 9.412Q20.7 10.525 20.7 12Q20.7 12.875 19.538 13.762Q18.375 14.65 16.425 15.15Q16.25 15.2 16.125 15.1Q16 15 16 14.8Q16 14.7 16.075 14.6Q16.15 14.5 16.25 14.475Q18.05 13.975 19.025 13.262Q20 12.55 20 12Q20 11.125 17.863 10.062Q15.725 9 12 9Q8.275 9 6.138 10.062Q4 11.125 4 12Q4 12.75 5.775 13.65Q7.55 14.55 10.15 14.9L8.15 12.9Q8.05 12.8 8.038 12.662Q8.025 12.525 8.15 12.4Q8.275 12.275 8.4 12.275Q8.525 12.275 8.65 12.4L10.975 14.725Q11.1 14.85 11.15 14.975Q11.2 15.1 11.2 15.25Q11.2 15.4 11.15 15.525Q11.1 15.65 10.975 15.775L8.65 18.1Q8.55 18.2 8.413 18.212Q8.275 18.225 8.15 18.1Z"/>
    </Icon>
  );
});

IconMaterial360RoundedW100Filled.displayName = 'AmauiIconMaterial360RoundedW100Filled';

export default IconMaterial360RoundedW100Filled;
