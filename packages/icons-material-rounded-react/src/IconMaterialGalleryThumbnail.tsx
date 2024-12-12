import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGalleryThumbnail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnail'

      short_name='GalleryThumbnail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm600-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520H720Zm40-80h80v-80h-80v80ZM120-280h400v-400H120v400Zm80-80h240q12 0 18-11t-2-21l-65-87q-6-8-16-8t-16 8l-59 79-39-52q-6-8-16-8t-16 8l-45 60q-8 10-2 21t18 11Zm520 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200H720Zm40-80h80v-80h-80v80Zm-640 0v-400 400Zm640-320v-80 80Zm0 320v-80 80Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnail.displayName = 'OnesyIconMaterialGalleryThumbnail';

export default IconMaterialGalleryThumbnail;
