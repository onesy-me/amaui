import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmAdd'

      short_name='AlarmAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm40 200q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialAlarmAdd.displayName = 'OnesyIconMaterialAlarmAdd';

export default IconMaterialAlarmAdd;
