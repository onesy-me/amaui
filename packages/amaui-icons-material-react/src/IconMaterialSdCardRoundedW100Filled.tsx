import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardRoundedW100Filled'
      short_name='SdCard'

      {...props}
    >
      <path d="M10.1 10.7Q10.25 10.7 10.35 10.6Q10.45 10.5 10.45 10.35V7.8Q10.45 7.65 10.35 7.55Q10.25 7.45 10.1 7.45Q9.95 7.45 9.85 7.55Q9.75 7.65 9.75 7.8V10.35Q9.75 10.5 9.85 10.6Q9.95 10.7 10.1 10.7ZM12.85 10.7Q13 10.7 13.1 10.6Q13.2 10.5 13.2 10.35V7.8Q13.2 7.65 13.1 7.55Q13 7.45 12.85 7.45Q12.7 7.45 12.6 7.55Q12.5 7.65 12.5 7.8V10.35Q12.5 10.5 12.6 10.6Q12.7 10.7 12.85 10.7ZM15.6 10.7Q15.75 10.7 15.85 10.6Q15.95 10.5 15.95 10.35V7.8Q15.95 7.65 15.85 7.55Q15.75 7.45 15.6 7.45Q15.45 7.45 15.35 7.55Q15.25 7.65 15.25 7.8V10.35Q15.25 10.5 15.35 10.6Q15.45 10.7 15.6 10.7ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V9.175Q5.3 8.875 5.413 8.6Q5.525 8.325 5.75 8.1L10.1 3.75Q10.325 3.525 10.6 3.412Q10.875 3.3 11.175 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialSdCardRoundedW100Filled.displayName = 'AmauiIconMaterialSdCardRoundedW100Filled';

export default IconMaterialSdCardRoundedW100Filled;
