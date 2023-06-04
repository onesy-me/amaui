import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinFull'

      short_name='JoinFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 19q-.55 0-1.087-.087-.538-.088-1.088-.288Q15.1 17.6 15.8 15.875q.7-1.725.7-3.875t-.7-3.875q-.7-1.725-1.975-2.75.55-.2 1.088-.287Q15.45 5 16 5q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Zm-4-1.25q-1.25 0-2.125-1.675T9 12q0-2.4.875-4.075Q10.75 6.25 12 6.25t2.125 1.675Q15 9.6 15 12q0 2.4-.875 4.075Q13.25 17.75 12 17.75ZM8 19q-2.925 0-4.962-2.038Q1 14.925 1 12t2.038-4.963Q5.075 5 8 5q.55 0 1.088.088.537.087 1.087.287Q8.9 6.4 8.2 8.125 7.5 9.85 7.5 12t.7 3.875q.7 1.725 1.975 2.75-.55.2-1.087.288Q8.55 19 8 19Z"/>
    </Icon>
  );
});

IconMaterialJoinFull.displayName = 'AmauiIconMaterialJoinFull';

export default IconMaterialJoinFull;
