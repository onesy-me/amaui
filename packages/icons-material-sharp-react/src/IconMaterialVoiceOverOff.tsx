import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceOverOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceOverOff'

      short_name='VoiceOverOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M514-556 320-752q9-3 19-5.5t21-2.5q66 0 113 47t47 113q0 11-1.5 22t-4.5 22ZM40-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q26 0 49.5 2.5T456-392l-56-54q-9 3-19 4.5t-21 1.5q-66 0-113-47t-47-113q0-11 1.5-21t4.5-19L56-792l56-56 730 740-54 58-108-110v40H40Zm80-80h480v-32q0-14-4.5-19.5T580-266q-36-18-92.5-36T360-320q-71 0-127.5 18T140-266q-9 5-14.5 14t-5.5 20v32Zm240 0Zm438-122-62-62q44-41 69-97t25-119q0-63-25-118t-69-96l62-64q56 53 89 125t33 153q0 81-33 153t-89 125ZM670-450l-64-64q18-17 29-38.5t11-47.5q0-26-11-47.5T606-686l64-64q32 29 50 67.5t18 82.5q0 44-18 82.5T670-450Z"/>
    </Icon>
  );
});

IconMaterialVoiceOverOff.displayName = 'OnesyIconMaterialVoiceOverOff';

export default IconMaterialVoiceOverOff;
