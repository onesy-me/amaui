import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3pW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3pW100'

      short_name='3p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-446h248v-2q0-28-35.5-47T480-514q-53 0-88.5 19T356-448v2Zm124-140q23 0 38.5-15.5T534-640q0-23-15.5-38.5T480-694q-23 0-38.5 15.5T426-640q0 23 15.5 38.5T480-586ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterial3pW100.displayName = 'OnesyIconMaterial3pW100';

export default IconMaterial3pW100;
