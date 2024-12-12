import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoW100'

      short_name='FlashAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-628-40 99q-2 4-5 6.5t-8 2.5q-8 0-12-6t-1-13l114-290q3-8 10-13t16-6q9-1 16.5 4.5T758-830l116 290q3 8-1.5 14t-12.5 6q-5 0-8.5-2t-5.5-7l-40-99H656Zm10-26h130l-64-164h-4l-62 164ZM280-336l153-222q5-8 1-16.5t-14-8.5H311l54-184q4-12-4-22.5T341-800H212q-14 0-23 9t-9 23v256q0 14 9 23t23 9h68v144Zm-12 41q-7-2-11.5-8t-4.5-14v-135h-40q-25 0-42.5-17.5T152-512v-256q0-25 17.5-42.5T212-828h129q26 0 43 18.5t10 41.5l-46 157h70q27 0 39.5 23.5T455-541L293-304q-5 7-11.5 9t-13.5 0Zm12-185H180h100Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoW100.displayName = 'OnesyIconMaterialFlashAutoW100';

export default IconMaterialFlashAutoW100;
