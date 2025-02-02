import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoFrameW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrameW100'

      short_name='PhotoFrame'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M222-202q-13 0-21.5-8.5T192-232v-20h-40q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h656q26 0 43 17t17 43v376q0 26-17 43t-43 17h-40v20q0 13-8.5 21.5T738-202H222Zm-70-78h656q12 0 22-10t10-22v-376q0-12-10-22t-22-10H152q-12 0-22 10t-10 22v376q0 12 10 22t22 10Zm152-106h354q9 0 13-8t-1-16l-98-131q-5-6-12-6.5t-12 5.5L440-403l-67-82q-5-5-12-5t-12 6l-57 74q-6 8-1.5 16t13.5 8ZM120-280v-440 440Z"/>
    </Icon>
  );
});

IconMaterialPhotoFrameW100.displayName = 'OnesyIconMaterialPhotoFrameW100';

export default IconMaterialPhotoFrameW100;
