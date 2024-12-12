import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrisisAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CrisisAlertW100Filled'

      short_name='CrisisAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-91 43-169t120-126q2 7 3 14t3 15q-67 45-104 115t-37 151q0 134 93 227t227 93q134 0 227-93t93-227q0-81-37.5-151.5T657-747q2-7 3.5-13.5T664-775q77 48 120.5 126T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Zm0-160q-78 0-133-55t-55-133q0-37 13.5-70.5T344-610q3 8 5.5 15t5.5 15q-17 21-26 47t-9 53q0 66 47 113t113 47q66 0 113-47t47-113q0-28-9.5-53T604-580q2-5-1 5t12-36q26 26 39.5 60t13.5 71q0 78-55 133t-133 55Zm-20-354q-37-111-45.5-145t-8.5-69q0-31 21.5-52.5T480-934q31 0 52.5 21.5T554-860q0 35-8.5 69T500-646h-40Zm20 220q-23 0-38.5-15.5T426-480q0-23 15.5-38.5T480-534q23 0 38.5 15.5T534-480q0 23-15.5 38.5T480-426Z"/>
    </Icon>
  );
});

IconMaterialCrisisAlertW100Filled.displayName = 'OnesyIconMaterialCrisisAlertW100Filled';

export default IconMaterialCrisisAlertW100Filled;
