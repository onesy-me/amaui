import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnW100'

      short_name='FlashOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-336 153-222q5-8 1-16.5t-14-8.5H511l54-184q4-12-4-22.5T541-800H412q-14 0-23 9t-9 23v256q0 14 9 23t23 9h68v144Zm175-205L493-304q-5 7-11.5 9t-13.5 0q-7-2-11.5-8t-4.5-14v-135h-40q-25 0-42.5-17.5T352-512v-256q0-25 17.5-42.5T412-828h129q26 0 43 18.5t10 41.5l-46 157h70q27 0 39.5 23.5T655-541Zm-175 61H380h100Z"/>
    </Icon>
  );
});

IconMaterialFlashOnW100.displayName = 'OnesyIconMaterialFlashOnW100';

export default IconMaterialFlashOnW100;
