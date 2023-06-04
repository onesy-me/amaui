import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotate90DegreesCcw = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCcw'

      short_name='Rotate90DegreesCcw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 22q-.925 0-1.812-.188-.888-.187-1.738-.537-.525-.225-.587-.75-.063-.525.362-.95.175-.175.45-.225.275-.05.525.075.65.3 1.362.438Q12.275 20 13 20q2.925 0 4.962-2.038Q20 15.925 20 13t-2.038-4.963Q15.925 6 13 6h-.15l.875.875q.275.275.275.7 0 .425-.275.7-.3.3-.725.3t-.7-.3L9.7 5.7q-.125-.15-.2-.325Q9.425 5.2 9.425 5t.075-.388q.075-.187.2-.312l2.6-2.6q.275-.275.7-.275.425 0 .725.275.275.3.275.725t-.275.7L12.85 4H13q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q22 11.125 22 13q0 3.75-2.625 6.375T13 22Zm-6-3.425q-.2 0-.375-.063-.175-.062-.325-.212l-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.15-.15.325-.212.175-.063.375-.063t.375.063q.175.062.325.212l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Zm0-2.425L10.15 13 7 9.85 3.85 13ZM7 13Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcw.displayName = 'AmauiIconMaterialRotate90DegreesCcw';

export default IconMaterialRotate90DegreesCcw;
