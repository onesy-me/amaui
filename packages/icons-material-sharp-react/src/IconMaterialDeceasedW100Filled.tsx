import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeceasedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeceasedW100Filled'

      short_name='Deceased'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M472-142q-78 0-133-55t-55-133v-22q61 13 110 50.5t72 89.5v-250q-69-5-116.5-56T302-640v-139l94 81 84-113 84 113 94-81v139q0 71-47.5 122T494-462v249q23-51 71.5-88.5T674-352v22q0 78-54.5 133T487-142h-15Z"/>
    </Icon>
  );
});

IconMaterialDeceasedW100Filled.displayName = 'OnesyIconMaterialDeceasedW100Filled';

export default IconMaterialDeceasedW100Filled;
