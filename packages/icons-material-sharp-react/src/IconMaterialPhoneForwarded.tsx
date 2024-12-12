import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneForwarded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneForwarded'

      short_name='PhoneForwarded'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM241-600l66-66-17-94h-89q5 45 15 84.5t25 75.5Zm358 358q40 17 80.5 27t80.5 13v-88l-94-19-67 67ZM241-600Zm358 358Zm121-318-58-56 64-64H520v-80h206l-62-62 56-58 160 162-160 158Z"/>
    </Icon>
  );
});

IconMaterialPhoneForwarded.displayName = 'OnesyIconMaterialPhoneForwarded';

export default IconMaterialPhoneForwarded;
