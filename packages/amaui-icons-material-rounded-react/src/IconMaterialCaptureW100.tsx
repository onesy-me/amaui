import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCaptureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptureW100'

      short_name='Capture'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-24.75 0-42.375-17.625T132 784V368q0-24.75 17.625-42.375T192 308h576q24.75 0 42.375 17.625T828 368v416q0 24.75-17.625 42.375T768 844H192Zm0-28h576q14 0 23-9t9-23V368q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm98-100h380q12.75 0 21.375-8.625T700 686V466q0-12.75-8.625-21.375T670 436H290q-12.75 0-21.375 8.625T260 466v220q0 12.75 8.625 21.375T290 716Z"/>
    </Icon>
  );
});

IconMaterialCaptureW100.displayName = 'AmauiIconMaterialCaptureW100';

export default IconMaterialCaptureW100;
