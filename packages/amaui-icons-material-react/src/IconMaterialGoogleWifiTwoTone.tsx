import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGoogleWifiTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleWifiTwoTone'
      short_name='GoogleWifi'

      {...props}
    >
      <path d="m5 20-.325-1H4.15q-.875 0-1.462-.625-.588-.625-.538-1.5l.725-11q.05-.8.625-1.338Q4.075 4 4.875 4h14.25q.8 0 1.375.537.575.538.625 1.338l.725 11q.05.875-.538 1.5-.587.625-1.462.625h-.525L19 20Zm-.4-10h14.8l-.275-4H4.875Zm-.125 2-.325 5h15.7l-.325-5ZM12 11.5Z"/>
    </Icon>
  );
});

IconMaterialGoogleWifiTwoTone.displayName = 'AmauiIconMaterialGoogleWifiTwoTone';

export default IconMaterialGoogleWifiTwoTone;
