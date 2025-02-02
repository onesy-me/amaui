import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarningOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOff'

      short_name='WarningOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-40-160v-121l80 80v41q0 17-11.5 28.5T480-360q-17 0-28.5-11.5T440-400Zm40-440q11 0 20.5 4.5T515-820l208 359q10 17 4 31t-19 22q-13 8-29 5t-27-21L480-720l-21 36q-10 17-25.5 19.5T405-670q-13-8-19-22.5t4-31.5l55-96q6-11 15-15.5t20-4.5ZM178-200h469L350-497 178-200ZM791-57l-64-63H109q-23 0-34-20t0-40l217-375L55-792q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM499-348Zm45-181Z"/>
    </Icon>
  );
});

IconMaterialWarningOff.displayName = 'OnesyIconMaterialWarningOff';

export default IconMaterialWarningOff;
