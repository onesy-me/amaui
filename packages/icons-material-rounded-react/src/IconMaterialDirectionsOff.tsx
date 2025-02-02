import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOff'

      short_name='DirectionsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-57 640-208 536-104q-12 12-26.5 18T480-80q-15 0-29.5-6T424-104L104-424q-12-12-18-26.5T80-480q0-15 6-29.5t18-26.5l104-104L55-792q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM584-264 264-584 160-480l320 320 104-104Zm296-216q0 15-6 29.5T856-424l-74 74q-11 11-28 11t-28-11q-11-11-11-28t11-28l74-74-320-320-74 74q-11 11-28 11t-28-11q-11-11-11-28t11-28l74-74q12-12 26.5-18t29.5-6q15 0 29.5 6t26.5 18l320 320q12 12 18 26.5t6 29.5Zm-342-58ZM424-424Zm-104 24v-120q0-17 11.5-28.5T360-560h41l80 80h-81v80q0 17-11.5 28.5T360-360q-17 0-28.5-11.5T320-400Zm298-58 34-34q12-12 12-28t-12-28l-78-78q-10-10-22-5t-12 19v52h-24l102 102Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOff.displayName = 'OnesyIconMaterialDirectionsOff';

export default IconMaterialDirectionsOff;
