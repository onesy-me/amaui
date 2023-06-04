import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTourW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourW100'

      short_name='Tour'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 21.35V2.975q0-.15.1-.238.1-.087.25-.087t.25.1q.1.1.1.25v1.65h12.6q.4 0 .612.325.213.325.063.7L18.3 9l1.325 3.325q.15.375-.063.7-.212.325-.612.325H6.35v8Zm.7-16v7.3Zm6.15 5q.575 0 .963-.388.387-.387.387-.962t-.387-.963q-.388-.387-.963-.387t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-6.15 2.3H19L17.55 9 19 5.35H6.35Z"/>
    </Icon>
  );
});

IconMaterialTourW100.displayName = 'AmauiIconMaterialTourW100';

export default IconMaterialTourW100;
