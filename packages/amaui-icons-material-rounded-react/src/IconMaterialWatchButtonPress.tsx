import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchButtonPress = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchButtonPress'

      short_name='WatchButtonPress'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 576q-17 0-28.5-11.5T760 536V256q0-17 11.5-28.5T800 216q17 0 28.5 11.5T840 256v280q0 17-11.5 28.5T800 576ZM340 976q-26 0-47.5-15.5T263 919l-37-125q-48-38-77-95t-29-123q0-66 29-123t77-95l37-125q8-26 29.5-41.5T340 176h120q26 0 47.5 15.5T537 233l37 125q48 38 77 95t29 123q0 66-29 123t-77 95l-37 125q-8 26-29.5 41.5T460 976H340Zm60-200q83 0 141.5-58.5T600 576q0-83-58.5-141.5T400 376q-83 0-141.5 58.5T200 576q0 83 58.5 141.5T400 776Zm-76-470q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H340l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T400 856q-19 0-37.5-2.5T324 846l16 50Zm-16-640h152-152Zm16 640h-16 152-136Z"/>
    </Icon>
  );
});

IconMaterialWatchButtonPress.displayName = 'AmauiIconMaterialWatchButtonPress';

export default IconMaterialWatchButtonPress;
