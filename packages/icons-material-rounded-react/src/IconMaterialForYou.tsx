import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForYou = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForYou'

      short_name='ForYou'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q65 0 135-10.5T745-520q20-8 37.5 5t17.5 34v286q0 25-14.5 45.5T748-120q-57 19-127.5 29.5T480-80q-70 0-140.5-10.5T212-120q-23-9-37.5-29.5T160-195v-286q0-21 17.5-34t37.5-5q60 19 130 29.5T480-480Zm240 280v-230q-50 14-115.5 22T480-400q-59 0-124.5-8T240-430v230q50 18 115 29t125 11q60 0 125-11t115-29ZM480-880q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47Zm0 240q33 0 56.5-23.5T560-720q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720q0 33 23.5 56.5T480-640Zm0-80Zm0 425Z"/>
    </Icon>
  );
});

IconMaterialForYou.displayName = 'OnesyIconMaterialForYou';

export default IconMaterialForYou;
