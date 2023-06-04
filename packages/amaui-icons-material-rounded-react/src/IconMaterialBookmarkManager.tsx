import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkManager = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManager'

      short_name='BookmarkManager'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880 416v72q0 17-11.5 28.5T840 528q-17 0-28.5-11.5T800 488v-72H160v400h280q17 0 28.5 11.5T480 856q0 17-11.5 28.5T440 896H160Zm572-219 43 43-155 154v42h42l155-154 42 42-149 149q-11 11-25.5 17t-30.5 6h-54q-17 0-28.5-11.5T560 936v-54q0-16 6-30.5t17-25.5l149-149Zm127 127L732 677l58-58q11-11 28-11t28 11l71 71q11 11 11 28t-11 28l-58 58ZM160 416v400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManager.displayName = 'AmauiIconMaterialBookmarkManager';

export default IconMaterialBookmarkManager;
