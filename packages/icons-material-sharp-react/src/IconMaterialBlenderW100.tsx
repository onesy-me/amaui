import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlenderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderW100'

      short_name='Blender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-132v-138l78-60-32-206H212v-252h188v-28h160v28h111l-71 458 78 60v138H282Zm42-432-31-196h-53v196h84Zm156.07 352q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q468-268 460-259.93t-8 20q0 11.93 8.07 19.93t20 8ZM386-348h188l64-412H322l64 412Zm-76 188h340v-96l-83-64H393l-83 64v96Zm170-80Z"/>
    </Icon>
  );
});

IconMaterialBlenderW100.displayName = 'OnesyIconMaterialBlenderW100';

export default IconMaterialBlenderW100;
