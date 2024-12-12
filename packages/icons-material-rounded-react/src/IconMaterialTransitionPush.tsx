import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitionPush = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionPush'

      short_name='TransitionPush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160h-41q-17 0-28-11.5T320-200q0-17 11.5-28t28.5-11h40v-481h-40q-17 0-28.5-11.5T320-760q0-17 11.5-28.5T360-800h40q33 0 56.5 23.5T480-720v480q0 33-23.5 56.5T400-160Zm240 0q-33 0-56.5-23.5T560-240v-480q0-33 23.5-56.5T640-800h200q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H640Zm0-79h200v-481H640v481ZM206-440H80q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h126l-35-35q-12-12-11.5-28.5T172-612q12-12 28.5-12t28.5 12l103 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L228-348q-11 11-27.5 11.5T172-348q-12-11-12-28t11-29l35-35Zm434 201v-481 481Z"/>
    </Icon>
  );
});

IconMaterialTransitionPush.displayName = 'OnesyIconMaterialTransitionPush';

export default IconMaterialTransitionPush;
