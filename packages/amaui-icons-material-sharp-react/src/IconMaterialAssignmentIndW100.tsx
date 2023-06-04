import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentIndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentIndW100'

      short_name='AssignmentInd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h6.35q-.25-.75.175-1.375T12 2.3q.75 0 1.175.625.425.625.175 1.375h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 18.35q1.35-1.325 3.138-2.088Q9.925 15.5 12 15.5t3.863.762q1.787.763 3.137 2.088V5H5Zm7-5.25q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 7.4q-1.2 0-2.025.825T9.15 10.25q0 1.2.825 2.025T12 13.1ZM5.55 19h12.9v-.15q-1.4-1.35-3.037-2-1.638-.65-3.413-.65-1.725 0-3.375.637-1.65.638-3.075 1.963ZM12 12.4q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.512Q11.125 8.1 12 8.1t1.512.638q.638.637.638 1.512t-.638 1.512q-.637.638-1.512.638Zm0-2.15Z"/>
    </Icon>
  );
});

IconMaterialAssignmentIndW100.displayName = 'AmauiIconMaterialAssignmentIndW100';

export default IconMaterialAssignmentIndW100;
