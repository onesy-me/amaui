import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinRight'

      short_name='JoinRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.45q-.2 0-.362-.063-.163-.062-.313-.187-1.075-.95-1.7-2.363Q9 13.425 9 12q0-1.425.625-2.838Q10.25 7.75 11.3 6.8q.15-.125.325-.2.175-.075.375-.075t.363.075q.162.075.312.2 1.075.95 1.7 2.362Q15 10.575 15 12t-.625 2.837Q13.75 16.25 12.7 17.2q-.125.125-.312.187-.188.063-.388.063ZM8 19q-2.9 0-4.95-2.05Q1 14.9 1 12q0-2.925 2.05-4.963Q5.1 5 8 5q.7 0 1.338.112.637.113 1.237.363-.45.3-.825.75-.375.45-.675.875-.275-.05-.537-.075Q8.275 7 8 7 5.925 7 4.463 8.45 3 9.9 3 12q0 2.075 1.463 3.537Q5.925 17 8 17q.275 0 .538-.038.262-.037.537-.087.3.425.687.875.388.45.813.75-.575.25-1.225.375Q8.7 19 8 19Zm8 0q-.675 0-1.312-.125-.638-.125-1.238-.375 1.4-.925 2.225-2.9.825-1.975.825-3.6t-.825-3.6q-.825-1.975-2.225-2.9.6-.25 1.238-.375Q15.325 5 16 5q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Z"/>
    </Icon>
  );
});

IconMaterialJoinRight.displayName = 'AmauiIconMaterialJoinRight';

export default IconMaterialJoinRight;
