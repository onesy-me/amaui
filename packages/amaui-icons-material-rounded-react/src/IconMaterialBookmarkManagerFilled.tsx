import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkManagerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerFilled'

      short_name='BookmarkManager'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m766 684 86 84-184 184q-11 11-25.5 17.5T612 976h-12q-17 0-28.5-11.5T560 936v-12q0-16 6-30.5t17-25.5l183-184Zm115 56-85-85 28-28q12-12 29-12t28 12l28 29q11 12 11 28.5T909 712l-28 28ZM160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880 416v117q-31 0-61 7.5T767 570L443 896H160Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerFilled.displayName = 'AmauiIconMaterialBookmarkManagerFilled';

export default IconMaterialBookmarkManagerFilled;
