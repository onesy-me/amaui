import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer10Alt1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10Alt1Filled'

      short_name='Timer10Alt1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-270h80v-340H290v80h40v260Zm120 0h220v-340H450v340Zm80-80v-180h60v180h-60ZM360-840v-80h240v80H360ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTimer10Alt1Filled.displayName = 'OnesyIconMaterialTimer10Alt1Filled';

export default IconMaterialTimer10Alt1Filled;
