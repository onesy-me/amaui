import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvTimerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvTimerFilled'

      short_name='AvTimer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-74 0-139.5-28.5T226-226q-49-49-77.5-114.5T120-480q0-78 30-146t84-117q13-11 29-10.5t27 11.5l218 218q11 11 11 28t-11 28q-11 11-28 11t-28-11L264-656q-30 36-47 80.5T200-480q0 116 82 198t198 82q116 0 198-82t82-198q0-107-68.5-184.5T520-756v36q0 17-11.5 28.5T480-680q-17 0-28.5-11.5T440-720v-80q0-17 11.5-28.5T480-840q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120ZM280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440Zm200 200q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm200-200q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440Z"/>
    </Icon>
  );
});

IconMaterialAvTimerFilled.displayName = 'OnesyIconMaterialAvTimerFilled';

export default IconMaterialAvTimerFilled;
