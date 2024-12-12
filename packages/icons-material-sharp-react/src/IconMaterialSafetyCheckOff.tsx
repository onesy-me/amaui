import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheckOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckOff'

      short_name='SafetyCheckOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M666-406q7-17 10.5-35.5T680-480q0-83-58.5-141.5T480-680q-20 0-38 3.5T407-666l259 260Zm88 88-60-62q12-32 19-66.5t7-69.5v-189l-240-90-146 55-62-62 208-78 320 120v244q0 51-11.5 101T754-318Zm38 262L662-186q-38 39-84.5 65.5T480-80q-139-35-229.5-159.5T160-516v-172L56-792l56-56 736 736-56 56ZM423-425Zm91-135Zm-34 396q35-11 67-31t59-47l-52-52q-17 7-35.5 10.5T480-280q-83 0-141.5-58.5T280-480q0-20 3.5-38.5T294-554l-54-54v92q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckOff.displayName = 'OnesyIconMaterialSafetyCheckOff';

export default IconMaterialSafetyCheckOff;
