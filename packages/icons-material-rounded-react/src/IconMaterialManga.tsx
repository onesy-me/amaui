import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManga = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Manga'

      short_name='Manga'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm164-80-26-37q-8-11-8-23.5t8-23.5l59-81v-101q0-13 7-23.5t20-14.5l96-31 60-82q8-11 20-14.5t24 .5l96 31 120-39v-41H160v480h164Zm99 0h377v-309l-27-37-93 30-92-30-58 79-93 30v98l-57 79 43 60Zm14-237Z"/>
    </Icon>
  );
});

IconMaterialManga.displayName = 'OnesyIconMaterialManga';

export default IconMaterialManga;
