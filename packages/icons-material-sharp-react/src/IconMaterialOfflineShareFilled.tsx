import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflineShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareFilled'

      short_name='OfflineShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-40v-720h80v640h400v80H160Zm160-160v-720h480v720H320Zm80-200h320v-320H400v320Zm40-80v-130h126l-28-28 42-42 100 100-100 100-42-42 28-28h-66v70h-60Z"/>
    </Icon>
  );
});

IconMaterialOfflineShareFilled.displayName = 'OnesyIconMaterialOfflineShareFilled';

export default IconMaterialOfflineShareFilled;
