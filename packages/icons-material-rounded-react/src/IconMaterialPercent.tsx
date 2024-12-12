import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPercent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Percent'

      short_name='Percent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-472 52q-11-11-11-28t11-28l528-528q11-11 28-11t28 11q11 11 11 28t-11 28L244-188q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialPercent.displayName = 'OnesyIconMaterialPercent';

export default IconMaterialPercent;
