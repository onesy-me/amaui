import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnarchiveRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveRoundedW100Filled'
      short_name='Unarchive'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V8Q4.3 7.8 4.338 7.613Q4.375 7.425 4.5 7.25L5.7 5.85Q5.85 5.7 6.062 5.65Q6.275 5.6 6.5 5.6H17.5Q17.725 5.6 17.95 5.637Q18.175 5.675 18.3 5.85L19.45 7.25Q19.6 7.4 19.65 7.6Q19.7 7.8 19.7 8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5.4 7.3H18.6L17.75 6.3H6.25ZM12 16.25Q12.15 16.25 12.25 16.15Q12.35 16.05 12.35 15.9V11.4L14.35 13.4Q14.45 13.5 14.588 13.512Q14.725 13.525 14.85 13.4Q14.975 13.275 14.975 13.15Q14.975 13.025 14.85 12.9L12.525 10.575Q12.4 10.45 12.275 10.4Q12.15 10.35 12 10.35Q11.85 10.35 11.725 10.4Q11.6 10.45 11.475 10.575L9.15 12.9Q9.05 13 9.038 13.137Q9.025 13.275 9.15 13.4Q9.275 13.525 9.4 13.525Q9.525 13.525 9.65 13.4L11.65 11.4V15.9Q11.65 16.05 11.75 16.15Q11.85 16.25 12 16.25Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveRoundedW100Filled.displayName = 'AmauiIconMaterialUnarchiveRoundedW100Filled';

export default IconMaterialUnarchiveRoundedW100Filled;
