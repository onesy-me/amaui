import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInboxRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxRoundedW100Filled'
      short_name='AllInbox'

      {...props}
    >
      <path d="M13.35 13.8Q14.275 13.8 14.863 13.35Q15.45 12.9 15.6 12.175Q15.65 11.975 15.775 11.887Q15.9 11.8 16.1 11.8H19.35V4.8Q19.35 4.45 19.125 4.225Q18.9 4 18.55 4H8.15Q7.8 4 7.575 4.225Q7.35 4.45 7.35 4.8V11.8H10.6Q10.8 11.8 10.925 11.887Q11.05 11.975 11.1 12.175Q11.25 12.9 11.838 13.35Q12.425 13.8 13.35 13.8ZM8.15 16.7Q7.5 16.7 7.075 16.275Q6.65 15.85 6.65 15.2V4.8Q6.65 4.15 7.075 3.725Q7.5 3.3 8.15 3.3H18.55Q19.2 3.3 19.625 3.725Q20.05 4.15 20.05 4.8V15.2Q20.05 15.85 19.625 16.275Q19.2 16.7 18.55 16.7ZM5.45 19.4Q4.8 19.4 4.375 18.975Q3.95 18.55 3.95 17.9V7.15Q3.95 7 4.05 6.9Q4.15 6.8 4.3 6.8Q4.45 6.8 4.55 6.9Q4.65 7 4.65 7.15V17.9Q4.65 18.25 4.875 18.475Q5.1 18.7 5.45 18.7H16.2Q16.35 18.7 16.45 18.8Q16.55 18.9 16.55 19.05Q16.55 19.2 16.45 19.3Q16.35 19.4 16.2 19.4Z"/>
    </Icon>
  );
});

IconMaterialAllInboxRoundedW100Filled.displayName = 'AmauiIconMaterialAllInboxRoundedW100Filled';

export default IconMaterialAllInboxRoundedW100Filled;
