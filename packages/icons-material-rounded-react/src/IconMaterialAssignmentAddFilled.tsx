import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentAddFilled'

      short_name='AssignmentAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-790q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-520-80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v218q0 18-15 28t-32 4q-17-5-35.5-7.5T720-520q-11 0-20.5.5T680-517q-5-1-12-2-5 0-12.5-.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440h205q-18 17-32.5 37T467-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280h123q-2 10-2.5 19.5T440-240q0 20 2 38t7 35q5 17-5 32t-27 15H200Zm500-100v80q0 8 6 14t14 6q8 0 14-6t6-14v-80h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80h-80q-8 0-14 6t-6 14q0 8 6 14t14 6h80ZM320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Z"/>
    </Icon>
  );
});

IconMaterialAssignmentAddFilled.displayName = 'OnesyIconMaterialAssignmentAddFilled';

export default IconMaterialAssignmentAddFilled;
