import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIos'

      short_name='ArrowBackIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIos.displayName = 'OnesyIconMaterialArrowBackIos';

export default IconMaterialArrowBackIos;
