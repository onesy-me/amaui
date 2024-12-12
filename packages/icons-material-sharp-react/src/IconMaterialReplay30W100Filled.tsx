import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplay30W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay30W100Filled'

      short_name='Replay30'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.06-132Q416-132 360-156t-98-66q-42-42-66-97.96-24-55.96-24-120.04h28q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-18l66 66-20 20-100-101 102-101 20 20-68 68h18q64.08 0 120.04 24Q656-700 698-658q42 42 66 97.94 24 55.95 24 120Q788-376 764-320t-66 98q-42 42-97.94 66-55.95 24-120 24ZM302-336v-28h120v-62h-90v-28h90v-62H302v-28h148v208H302Zm208 0v-208h148v208H510Zm28-28h92v-152h-92v152Z"/>
    </Icon>
  );
});

IconMaterialReplay30W100Filled.displayName = 'OnesyIconMaterialReplay30W100Filled';

export default IconMaterialReplay30W100Filled;
