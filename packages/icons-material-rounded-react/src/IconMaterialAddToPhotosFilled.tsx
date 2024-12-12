import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToPhotosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosFilled'

      short_name='AddToPhotos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-400q17 0 28.5-11.5T600-440v-80h80q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600h-80v-80q0-17-11.5-28.5T560-720q-17 0-28.5 11.5T520-680v80h-80q-17 0-28.5 11.5T400-560q0 17 11.5 28.5T440-520h80v80q0 17 11.5 28.5T560-400ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotosFilled.displayName = 'OnesyIconMaterialAddToPhotosFilled';

export default IconMaterialAddToPhotosFilled;
