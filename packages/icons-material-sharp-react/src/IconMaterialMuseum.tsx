import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMuseum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Museum'

      short_name='Museum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h80v-360H80v-80l400-280 400 280v80h-80v360h80v80H80Zm160-80h480-480Zm80-80h80v-160l80 120 80-120v160h80v-280h-80l-80 120-80-120h-80v280Zm400 80v-454L480-782 240-614v454h480Z"/>
    </Icon>
  );
});

IconMaterialMuseum.displayName = 'OnesyIconMaterialMuseum';

export default IconMaterialMuseum;
