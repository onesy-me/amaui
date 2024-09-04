import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddTriangle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTriangle'

      short_name='AddTriangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M144-120q-35 0-52-30t0-60l336-580q9-15 23-22.5t29-7.5q15 0 29 7.5t23 22.5l336 580q17 30 0 60t-52 30H144Zm35-80h602L480-720 179-200Zm261-120v40q0 17 11.5 28.5T480-240q17 0 28.5-11.5T520-280v-40h40q17 0 28.5-11.5T600-360q0-17-11.5-28.5T560-400h-40v-40q0-17-11.5-28.5T480-480q-17 0-28.5 11.5T440-440v40h-40q-17 0-28.5 11.5T360-360q0 17 11.5 28.5T400-320h40Zm40-40Z"/>
    </Icon>
  );
});

IconMaterialAddTriangle.displayName = 'AmauiIconMaterialAddTriangle';

export default IconMaterialAddTriangle;
