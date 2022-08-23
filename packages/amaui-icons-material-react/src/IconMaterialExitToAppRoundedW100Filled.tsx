import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExitToAppRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppRoundedW100Filled'
      short_name='ExitToApp'

      {...props}
    >
      <path d="M10.25 15.35Q10.125 15.225 10.125 15.1Q10.125 14.975 10.25 14.85L12.75 12.35H4.15Q4 12.35 3.9 12.25Q3.8 12.15 3.8 12Q3.8 11.85 3.9 11.75Q4 11.65 4.15 11.65H12.75L10.225 9.125Q10.125 9.025 10.125 8.9Q10.125 8.775 10.25 8.65Q10.375 8.525 10.5 8.525Q10.625 8.525 10.75 8.65L13.575 11.475Q13.7 11.6 13.75 11.725Q13.8 11.85 13.8 12Q13.8 12.15 13.75 12.275Q13.7 12.4 13.575 12.525L10.725 15.375Q10.625 15.475 10.5 15.475Q10.375 15.475 10.25 15.35ZM5.3 19.7Q4.65 19.7 4.225 19.275Q3.8 18.85 3.8 18.2V15.7Q3.8 15.55 3.9 15.45Q4 15.35 4.15 15.35Q4.3 15.35 4.4 15.45Q4.5 15.55 4.5 15.7V18.2Q4.5 18.5 4.75 18.75Q5 19 5.3 19H18.7Q19 19 19.25 18.75Q19.5 18.5 19.5 18.2V5.8Q19.5 5.5 19.25 5.25Q19 5 18.7 5H5.3Q5 5 4.75 5.25Q4.5 5.5 4.5 5.8V8.3Q4.5 8.45 4.4 8.55Q4.3 8.65 4.15 8.65Q4 8.65 3.9 8.55Q3.8 8.45 3.8 8.3V5.8Q3.8 5.15 4.225 4.725Q4.65 4.3 5.3 4.3H18.7Q19.35 4.3 19.775 4.725Q20.2 5.15 20.2 5.8V18.2Q20.2 18.85 19.775 19.275Q19.35 19.7 18.7 19.7Z"/>
    </Icon>
  );
});

IconMaterialExitToAppRoundedW100Filled.displayName = 'AmauiIconMaterialExitToAppRoundedW100Filled';

export default IconMaterialExitToAppRoundedW100Filled;
