import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlobeAsiaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeAsiaFilled'

      short_name='GlobeAsia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m472 897 6-169 122-120h78v74l91 14q11-28 17.5-58t6.5-62q0-89-44.5-162.5T632 298v118H512v120h-80v120h-81l-79-120h-40v40l-71 79q26 104 112.5 173T472 897Zm160-241H512v-80h120v80Zm0-240h81l-40 120h-82l41-120ZM472 976q-83 0-156-31.5T189 859q-54-54-85.5-127T72 576q0-83 31.5-156T189 293q54-54 127-85.5T472 176q83 0 156 31.5T755 293q54 54 85.5 127T872 576q0 83-31.5 156T755 859q-54 54-127 85.5T472 976Z"/>
    </Icon>
  );
});

IconMaterialGlobeAsiaFilled.displayName = 'AmauiIconMaterialGlobeAsiaFilled';

export default IconMaterialGlobeAsiaFilled;
