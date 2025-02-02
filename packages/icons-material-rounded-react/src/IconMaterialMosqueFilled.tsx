import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMosqueFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueFilled'

      short_name='Mosque'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M278-638q-21 0-29.5-8.5T240-676q0-40 19-74t51-56l125-84q20-14 45-14t45 14l125 84q32 22 51 56t19 74q0 21-8.5 29.5T682-638H278ZM40-200v-411q-18-11-29-28.5T0-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T120-611v171h80v-80q0-25 16-48t46-30h436q30 7 46 30t16 48v80h80v-171q-18-11-29-28.5T800-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T920-611v411q0 33-23.5 56.5T840-120H600q-17 0-28.5-11.5T560-160v-120q0-33-23.5-56.5T480-360q-33 0-56.5 23.5T400-280v120q0 17-11.5 28.5T360-120H120q-33 0-56.5-23.5T40-200Z"/>
    </Icon>
  );
});

IconMaterialMosqueFilled.displayName = 'OnesyIconMaterialMosqueFilled';

export default IconMaterialMosqueFilled;
