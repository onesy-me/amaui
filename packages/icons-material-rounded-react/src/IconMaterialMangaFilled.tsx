import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMangaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MangaFilled'

      short_name='Manga'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm164-80h476v-439l-120 39-96-31q-12-4-24-.5T540-657l-60 82-96 31q-13 4-20 14.5t-7 23.5v101l-59 81q-8 11-8 23.5t8 23.5l26 37Z"/>
    </Icon>
  );
});

IconMaterialMangaFilled.displayName = 'OnesyIconMaterialMangaFilled';

export default IconMaterialMangaFilled;
