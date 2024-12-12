import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentAdd'

      short_name='AssignmentAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v201q0 17-11.5 28.5T800-519q-17 0-28.5-11.5T760-559v-201H200v560h200q17 0 28.5 11.5T440-160q0 17-11.5 28.5T400-120H200Zm0-120v40-560 243-3 280Zm120-40h100q17 0 28.5-11.5T460-320q0-17-11.5-28.5T420-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160h200q17 0 28.5-11.5T560-480q0-17-11.5-28.5T520-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-180v80q0 8 6 14t14 6q8 0 14-6t6-14v-80h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80h-80q-8 0-14 6t-6 14q0 8 6 14t14 6h80Z"/>
    </Icon>
  );
});

IconMaterialAssignmentAdd.displayName = 'OnesyIconMaterialAssignmentAdd';

export default IconMaterialAssignmentAdd;
