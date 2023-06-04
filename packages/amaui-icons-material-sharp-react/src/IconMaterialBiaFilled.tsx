import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiaFilled'

      short_name='Bia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 456h126q-3-9-4.5-19t-1.5-21q0-11 1.5-21t4.5-19H280v80Zm360 40q58 0 109-15t51-65q0-50-51-65t-109-15q-58 0-109 15t-51 65q0 50 51 65t109 15ZM80 896V456h120V296h275q34-20 77-30t88-10q91 0 165.5 39.5T880 416v480H640V696h-80v200h-80V696h-80v200h-80V696h-80v200H80Z"/>
    </Icon>
  );
});

IconMaterialBiaFilled.displayName = 'AmauiIconMaterialBiaFilled';

export default IconMaterialBiaFilled;
