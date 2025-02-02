import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkLocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLocked'

      short_name='NetworkLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m148-148 664-664q19-19 43.5-8.5T880-783v263q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-166L273-160h287q17 0 28.5 11.5T600-120q0 17-11.5 28.5T560-80H177q-27 0-37.5-24.5T148-148Zm566 68q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T800-400q33 0 56.5 23.5T880-320v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H714Zm46-200h80v-40q0-17-11.5-28.5T800-360q-17 0-28.5 11.5T760-320v40ZM273-160l527-526Q681-567 536.5-423T273-160Z"/>
    </Icon>
  );
});

IconMaterialNetworkLocked.displayName = 'OnesyIconMaterialNetworkLocked';

export default IconMaterialNetworkLocked;
