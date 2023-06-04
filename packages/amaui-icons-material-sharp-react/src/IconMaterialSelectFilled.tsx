import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectFilled'

      short_name='Select'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSelectFilled.displayName = 'AmauiIconMaterialSelectFilled';

export default IconMaterialSelectFilled;
