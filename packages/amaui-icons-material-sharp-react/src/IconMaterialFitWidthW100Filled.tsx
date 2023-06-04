import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitWidthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitWidthW100Filled'

      short_name='FitWidth'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M140 916V236h40v680h-40Zm160-320v-40h40v40h-40Zm160 0v-40h40v40h-40Zm160 0v-40h40v40h-40Zm160 320V236h40v680h-40Z"/>
    </Icon>
  );
});

IconMaterialFitWidthW100Filled.displayName = 'AmauiIconMaterialFitWidthW100Filled';

export default IconMaterialFitWidthW100Filled;
