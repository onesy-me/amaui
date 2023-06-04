import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchWake = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchWake'

      short_name='WatchWake'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 776q-17 0-28.5-11.5T760 736q0-17 11.5-28.5T800 696q17 0 28.5 11.5T840 736q0 17-11.5 28.5T800 776Zm40-160h-40q-17 0-28.5-11.5T760 576q0-17 11.5-28.5T800 536h40q17 0 28.5 11.5T880 576q0 17-11.5 28.5T840 616Zm40-160h-80q-17 0-28.5-11.5T760 416q0-17 11.5-29t28.5-12h80q17 0 28.5 12t11.5 29q0 17-11.5 28.5T880 456ZM310 976q-14 0-24-8t-14-21l-46-153q-48-38-77-95t-29-123q0-66 29-123t77-95l46-153q4-13 14-21t24-8h180q14 0 24 8t14 21l46 153q48 38 77 95t29 123q0 66-29 123t-77 95l-46 153q-4 13-14 21t-24 8H310Zm90-200q83 0 141.5-58.5T600 576q0-83-58.5-141.5T400 376q-83 0-141.5 58.5T200 576q0 83 58.5 141.5T400 776Zm-76-470q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H340l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T400 856q-19 0-37.5-2.5T324 846l16 50Zm-16-640h152-152Zm16 640h-16 152-136Z"/>
    </Icon>
  );
});

IconMaterialWatchWake.displayName = 'AmauiIconMaterialWatchWake';

export default IconMaterialWatchWake;
