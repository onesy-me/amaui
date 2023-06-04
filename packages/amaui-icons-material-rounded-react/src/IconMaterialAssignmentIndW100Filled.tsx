import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentIndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentIndW100Filled'

      short_name='AssignmentInd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h4.85q-.25-.75.175-1.375T12 2.3q.75 0 1.175.625.425.625.175 1.375h4.85q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 18.35q1.35-1.325 3.138-2.088Q9.925 15.5 12 15.5t3.863.762q1.787.763 3.137 2.088V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8Zm7-5.25q-1.2 0-2.025-.825T9.15 10.25q0-1.2.825-2.025T12 7.4q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025T12 13.1Z"/>
    </Icon>
  );
});

IconMaterialAssignmentIndW100Filled.displayName = 'AmauiIconMaterialAssignmentIndW100Filled';

export default IconMaterialAssignmentIndW100Filled;
