import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageRoundedW100'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM6 13.5 9.475 10.025Q9.6 9.9 9.725 9.85Q9.85 9.8 10 9.8Q10.15 9.8 10.275 9.85Q10.4 9.9 10.525 10.025L14 13.5L17.475 10.025Q17.6 9.9 17.725 9.85Q17.85 9.8 18 9.8Q18.15 9.8 18.275 9.85Q18.4 9.9 18.525 10.025L19 10.5V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V12.5ZM5 18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V11.5L18 10.5L14.525 13.975Q14.4 14.1 14.275 14.15Q14.15 14.2 14 14.2Q13.85 14.2 13.725 14.15Q13.6 14.1 13.475 13.975L10 10.5L6.525 13.975Q6.4 14.1 6.275 14.15Q6.15 14.2 6 14.2Q5.85 14.2 5.725 14.15Q5.6 14.1 5.475 13.975L5 13.5ZM5 18.2Q5 18.55 5 18.775Q5 19 5 19Q5 19 5 18.775Q5 18.55 5 18.2V11.5V12.2V11.2V10.5V5.8Q5 5.45 5 5.225Q5 5 5 5Q5 5 5 5.225Q5 5.45 5 5.8V12.5V13.5Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageRoundedW100.displayName = 'AmauiIconMaterialBrokenImageRoundedW100';

export default IconMaterialBrokenImageRoundedW100;
