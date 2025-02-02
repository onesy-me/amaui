import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeekendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendW100'

      short_name='Weekend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-636q0-29 19.5-48.5T228-704h504q29 0 48.5 19.5T800-636v60q29 0 48.5 19.5T868-508v200q0 29-19.5 48.5T800-240H160q-29 0-48.5-19.5T92-308v-200q0-29 19.5-48.5T160-576v-60Zm28 0v66q18 8 29 25t11 37v106h504v-106q0-20 11-37t29-25v-66q0-17-11.5-28.5T732-676H228q-17 0-28.5 11.5T188-636Zm572 262H200v-134q0-8-3-15.5t-8.5-13q-5.5-5.5-13-8.5t-15.5-3q-17 0-28.5 11.5T120-508v200q0 17 11.5 28.5T160-268h640q17 0 28.5-11.5T840-308v-200q0-17-11.5-28.5T800-548q-8 0-15.5 3t-13 8.5q-5.5 5.5-8.5 13t-3 15.5v134Zm-280 0Zm0 106Zm0-134Z"/>
    </Icon>
  );
});

IconMaterialWeekendW100.displayName = 'OnesyIconMaterialWeekendW100';

export default IconMaterialWeekendW100;
