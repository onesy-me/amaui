import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentPatient = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentPatient'

      short_name='RecentPatient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-33 0-56.5-23.5T160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q11 0 21.5.5T523-438q16 2 26.5 13.5T560-397q0 17-13.5 28.5T516-359q-9-1-18-1h-18q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32h280q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160H240Zm0-80h320-320Zm240-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm240 440h-40q-17 0-28.5-11.5T640-240v-160q0-17 11.5-28.5T680-440h151q17 0 26 14t1 29l-58 117h28q17 0 25.5 15t.5 30L739-33q-4 7-11.5 5T720-38v-162Z"/>
    </Icon>
  );
});

IconMaterialRecentPatient.displayName = 'OnesyIconMaterialRecentPatient';

export default IconMaterialRecentPatient;
