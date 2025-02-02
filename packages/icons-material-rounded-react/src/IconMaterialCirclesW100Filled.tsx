import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCirclesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CirclesW100Filled'

      short_name='Circles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-860q75 0 127.5 52.5T860-680q0 75-52.5 127.5T680-500q-75 0-127.5-52.5T500-680q0-75 52.5-127.5T680-860ZM241-241q-40-40-61.5-91T158-440q0-95 56-170.5T362-709q20-11 39 1.5t19 36.5q2 50 21.5 95t54.5 80q35 35 79.5 54.5T670-420q21 1 33 19t7 41q-26 91-101 146.5T440-158q-57 0-108-21.5T241-241Z"/>
    </Icon>
  );
});

IconMaterialCirclesW100Filled.displayName = 'OnesyIconMaterialCirclesW100Filled';

export default IconMaterialCirclesW100Filled;
