import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPinCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircleW100'

      short_name='PersonPinCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.35q1.05 0 1.938-.463.887-.462 1.487-1.237-.75-.5-1.613-.75-.862-.25-1.812-.25-.95 0-1.812.25-.863.25-1.613.75.6.775 1.487 1.237.888.463 1.938.463Zm0-5q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 6.65 12 6.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 11.175q3.15-2.7 4.9-5.563 1.75-2.862 1.75-4.762 0-3.025-1.925-4.938Q14.8 3.35 12 3.35T7.275 5.262Q5.35 7.175 5.35 10.2q0 1.9 1.75 4.762 1.75 2.863 4.9 5.563Zm0 .975q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Zm0-11.3Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircleW100.displayName = 'AmauiIconMaterialPersonPinCircleW100';

export default IconMaterialPersonPinCircleW100;
