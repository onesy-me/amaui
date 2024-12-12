import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControlPointDuplicate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlPointDuplicate'

      short_name='ControlPointDuplicate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-320h80v-120h120v-80H640v-120h-80v120H440v80h120v120ZM240-140Q131-178 65.5-271.5T0-480q0-115 65.5-208.5T240-820v88q-74 35-117 103T80-480q0 81 43 149t117 103v88Zm360 20q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T240-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T600-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T960-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T600-120Zm0-360Zm0 280q117 0 198.5-81.5T880-480q0-117-81.5-198.5T600-760q-117 0-198.5 81.5T320-480q0 117 81.5 198.5T600-200Z"/>
    </Icon>
  );
});

IconMaterialControlPointDuplicate.displayName = 'OnesyIconMaterialControlPointDuplicate';

export default IconMaterialControlPointDuplicate;
