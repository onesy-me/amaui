import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFertile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fertile'

      short_name='Fertile'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M533 236q29 34 55 69t50 72l178-133q9-7 20-8t22 4q11 5 16.5 15t5.5 21v300q0 83-31.5 156T763 859q-54 54-127 85.5T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576V276q0-11 5.5-21t16.5-15q11-5 22-4t20 8l177 133q24-37 50.5-72t55.5-69q10-12 24-18.5t29-6.5q15 0 29 6.5t24 18.5Zm-53 660q134 0 227-93t93-227V356L616 494q-45-72-73-114t-63-84q-35 43-65 87t-71 111L160 356v220q0 134 93 227t227 93Zm0-300Z"/>
    </Icon>
  );
});

IconMaterialFertile.displayName = 'AmauiIconMaterialFertile';

export default IconMaterialFertile;
