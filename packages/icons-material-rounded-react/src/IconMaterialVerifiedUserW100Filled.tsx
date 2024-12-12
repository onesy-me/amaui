import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerifiedUserW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUserW100Filled'

      short_name='VerifiedUser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-414-76-76q-4-4-9.5-4.5T342-490q-5 5-5 10t5 10l75 75q9 9 21 9t21-9l159-159q4-4 4.5-9.5T618-574q-5-5-10-5t-10 5L438-414Zm42 275q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialVerifiedUserW100Filled.displayName = 'OnesyIconMaterialVerifiedUserW100Filled';

export default IconMaterialVerifiedUserW100Filled;
