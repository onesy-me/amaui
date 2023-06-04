import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShapes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shapes'

      short_name='Shapes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 15Zm-7 2.95q.25.025.488.038Q8.725 18 9 18t.512-.012q.238-.013.488-.038V20h10V10h-2.05q.025-.25.038-.488Q18 9.275 18 9t-.012-.512Q17.975 8.25 17.95 8H22v14H8ZM9 16q-2.925 0-4.963-2.038Q2 11.925 2 9t2.037-4.963Q6.075 2 9 2q2.925 0 4.963 2.037Q16 6.075 16 9q0 2.925-2.037 4.962Q11.925 16 9 16Zm0-2q2.075 0 3.538-1.463Q14 11.075 14 9t-1.462-3.537Q11.075 4 9 4 6.925 4 5.463 5.463 4 6.925 4 9t1.463 3.537Q6.925 14 9 14Zm0-5Z"/>
    </Icon>
  );
});

IconMaterialShapes.displayName = 'AmauiIconMaterialShapes';

export default IconMaterialShapes;
