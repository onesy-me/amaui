import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReferenceAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAll'

      short_name='QuickReferenceAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-800v241-1 400-640 200-200Zm120 400h80q17 0 28.5-11.5T440-440q0-17-11.5-28.5T400-480h-80q-17 0-28.5 11.5T280-440q0 17 11.5 28.5T320-400Zm0 160h40q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320h-40q-17 0-28.5 11.5T280-280q0 17 11.5 28.5T320-240ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v28q0 17-11.5 28T720-540q-17 0-28.5-11.5T680-580v-20H520q-17 0-28.5-11.5T480-640v-160H200v640h220q17 0 28.5 11.5T460-120q0 17-11.5 28.5T420-80H200Zm460-120q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM892-68q-11 11-28 11t-28-11l-80-80q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T812-204l80 80q11 11 11 28t-11 28Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAll.displayName = 'OnesyIconMaterialQuickReferenceAll';

export default IconMaterialQuickReferenceAll;
