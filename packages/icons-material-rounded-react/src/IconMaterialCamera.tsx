import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Camera'

      short_name='Camera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M491-600h285q-27-69-82.5-118.5T566-788l-92 158q-6 10 0 20t17 10Zm-144 50q6 10 17 10t17-10l143-246q-11-2-22-3t-22-1q-66 0-123 25t-101 67l91 158ZM170-400h183q11 0 17.5-10t.5-20L228-676q-32 41-50 90.5T160-480q0 21 2.5 40.5T170-400Zm224 228 91-158q6-10-.5-20T467-360H184q27 69 82.5 118.5T394-172Zm86 12q66 0 123-25t101-67l-91-158q-6-10-17-10t-17 10L436-164q11 2 21.5 3t22.5 1Zm252-124q32-41 50-90.5T800-480q0-21-2.5-40.5T790-560H607q-11 0-17.5 10t-.5 20l143 246ZM480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/>
    </Icon>
  );
});

IconMaterialCamera.displayName = 'OnesyIconMaterialCamera';

export default IconMaterialCamera;
