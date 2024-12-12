import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarRateHalf = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateHalf'

      short_name='StarRateHalf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-644v236l96 74-36-122 90-64H518l-38-124ZM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z"/>
    </Icon>
  );
});

IconMaterialStarRateHalf.displayName = 'OnesyIconMaterialStarRateHalf';

export default IconMaterialStarRateHalf;
