import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Resize'

      short_name='Resize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 616v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm160-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm40-160q-17 0-28.5-11.5T760 416V296H640q-17 0-28.5-11.5T600 256q0-17 11.5-28.5T640 216h120q33 0 56.5 23.5T840 296v120q0 17-11.5 28.5T800 456ZM200 936q-33 0-56.5-23.5T120 856V736q0-17 11.5-28.5T160 696q17 0 28.5 11.5T200 736v120h120q17 0 28.5 11.5T360 896q0 17-11.5 28.5T320 936H200Zm560 0v-80h80q0 33-23.5 56.5T760 936ZM120 296q0-33 23.5-56.5T200 216v80h-80Z"/>
    </Icon>
  );
});

IconMaterialResize.displayName = 'AmauiIconMaterialResize';

export default IconMaterialResize;
