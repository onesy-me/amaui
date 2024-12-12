import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndCircleW100Filled'

      short_name='LineEndCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-322q-63 0-107.5-41.5T483-466H136v-28h347q5-61 49.5-102.5T640-638q65.83 0 111.92 46.12 46.08 46.12 46.08 112T751.92-368Q705.83-322 640-322Z"/>
    </Icon>
  );
});

IconMaterialLineEndCircleW100Filled.displayName = 'OnesyIconMaterialLineEndCircleW100Filled';

export default IconMaterialLineEndCircleW100Filled;
