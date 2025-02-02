import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseGalleryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseGalleryFilled'

      short_name='BrowseGallery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-496v-144q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640v159q0 8 3 15.5t9 13.5l112 112q11 11 28 11t28-11q11-11 11-28t-11-28L400-496Zm480 16q0-72-33.5-133.5T754-713q-14-9-19-25t2-31q8-16 24-21t30 4q78 49 123.5 130T960-480q0 95-45.5 176T791-174q-14 9-30 4t-24-21q-7-15-2-31t19-25q59-38 92.5-99.5T880-480ZM360-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T0-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T360-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T720-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T360-120Z"/>
    </Icon>
  );
});

IconMaterialBrowseGalleryFilled.displayName = 'OnesyIconMaterialBrowseGalleryFilled';

export default IconMaterialBrowseGalleryFilled;
