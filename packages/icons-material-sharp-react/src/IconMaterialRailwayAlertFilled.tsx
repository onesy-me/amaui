import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRailwayAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RailwayAlertFilled'

      short_name='RailwayAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 80-80h480l80 80H80Zm320-280q25 0 42.5-17.5T460-420q0-25-17.5-42.5T400-480q-25 0-42.5 17.5T340-420q0 25 17.5 42.5T400-360Zm280-120q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm-20-160h40v-160h-40v160Zm20 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-200l40-40h-20q-58 0-99-41t-41-99v-260q0-129 92.5-204.5T400-920q29 0 56.5 3.5T510-905q-43 33-71.5 80.5T402-720H177q-8 18-12.5 37.5T160-640v40h252q26 88 99.5 144T681-400q10 0 19.5-.5T720-403v23q0 58-41 99t-99 41h-20l40 40H200Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlertFilled.displayName = 'OnesyIconMaterialRailwayAlertFilled';

export default IconMaterialRailwayAlertFilled;
