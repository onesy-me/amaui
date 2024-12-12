import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrisisAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CrisisAlert'

      short_name='CrisisAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-114 59.5-210.5T301-838q1 19 4 38.5t10 45.5q-72 44-113.5 116.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-85-41.5-158T644-755q7-26 10-45.5t5-37.5q102 51 161.5 147T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-160q-100 0-170-70t-70-170q0-58 25.5-109t72.5-85q5 15 11 34.5t16 48.5q-22 23-33.5 51T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-32-11.5-60T595-591q8-24 14.5-44.5T621-674q47 34 73 85t26 109q0 100-70 170t-170 70Zm-12-380q-13 0-22.5-7.5T432-647l-40-130q-7-26-9.5-45.5T380-860q0-42 29-71t71-29q42 0 71 29t29 71q0 18-2.5 37.5T568-777l-40 130q-4 12-13.5 19.5T492-620h-24Zm12 220q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialCrisisAlert.displayName = 'OnesyIconMaterialCrisisAlert';

export default IconMaterialCrisisAlert;
