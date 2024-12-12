import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarRate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRate'

      short_name='StarRate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Zm247-369Z"/>
    </Icon>
  );
});

IconMaterialStarRate.displayName = 'OnesyIconMaterialStarRate';

export default IconMaterialStarRate;
