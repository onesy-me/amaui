import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatRoundedW100Filled'
      short_name='Repeat'

      {...props}
    >
      <path d="M17.4 17.4V13.75Q17.4 13.6 17.5 13.5Q17.6 13.4 17.75 13.4Q17.9 13.4 18 13.5Q18.1 13.6 18.1 13.725V17.35Q18.1 17.675 17.888 17.888Q17.675 18.1 17.35 18.1H5.5L7.5 20.1Q7.625 20.225 7.625 20.35Q7.625 20.475 7.5 20.6Q7.375 20.725 7.25 20.725Q7.125 20.725 7.025 20.625L4.675 18.275Q4.45 18.05 4.45 17.75Q4.45 17.45 4.675 17.225L7 14.9Q7.125 14.775 7.25 14.775Q7.375 14.775 7.5 14.9Q7.6 15 7.613 15.137Q7.625 15.275 7.525 15.375L5.5 17.4ZM6.6 6.6V10.25Q6.6 10.4 6.5 10.5Q6.4 10.6 6.25 10.6Q6.1 10.6 6 10.5Q5.9 10.4 5.9 10.275V6.65Q5.9 6.325 6.113 6.112Q6.325 5.9 6.65 5.9H18.5L16.5 3.9Q16.375 3.775 16.375 3.65Q16.375 3.525 16.5 3.4Q16.6 3.3 16.738 3.287Q16.875 3.275 16.975 3.375L19.325 5.725Q19.55 5.95 19.55 6.25Q19.55 6.55 19.325 6.775L17 9.1Q16.875 9.225 16.75 9.225Q16.625 9.225 16.5 9.1Q16.375 8.975 16.375 8.85Q16.375 8.725 16.475 8.625L18.5 6.6Z"/>
    </Icon>
  );
});

IconMaterialRepeatRoundedW100Filled.displayName = 'AmauiIconMaterialRepeatRoundedW100Filled';

export default IconMaterialRepeatRoundedW100Filled;
