import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmSmartWake = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmSmartWake'

      short_name='AlarmSmartWake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-400q17 0 28.5-11.5T360-440q0-17-11.5-28.5T320-480q-17 0-28.5 11.5T280-440q0 17 11.5 28.5T320-400Zm160 0q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400Zm160 0q17 0 28.5-11.5T680-440q0-17-11.5-28.5T640-480q-17 0-28.5 11.5T600-440q0 17 11.5 28.5T640-400ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialAlarmSmartWake.displayName = 'OnesyIconMaterialAlarmSmartWake';

export default IconMaterialAlarmSmartWake;
