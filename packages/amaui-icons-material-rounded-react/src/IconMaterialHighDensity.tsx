import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighDensity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighDensity'

      short_name='HighDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 936v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM200 776q-33 0-56.5-23.5T120 696V296q0-33 23.5-56.5T200 216h400q33 0 56.5 23.5T680 296v400q0 33-23.5 56.5T600 776H200Zm0-80h400V296H200v400Zm0 0V296v400Zm560-400v-80q33 0 56.5 23.5T840 296h-80Zm0 640v-80h80q0 33-23.5 56.5T760 936Zm-560 0q-33 0-56.5-23.5T120 856h80v80Z"/>
    </Icon>
  );
});

IconMaterialHighDensity.displayName = 'AmauiIconMaterialHighDensity';

export default IconMaterialHighDensity;
