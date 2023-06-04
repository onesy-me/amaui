import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountCircleOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOff'

      short_name='AccountCircleOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M538 518ZM424 632Zm56 264q51 0 98-15.5t88-44.5q-41-29-88-44.5T480 776q-51 0-98 15.5T294 836q41 29 88 44.5t98 15.5Zm106-328-57-57q5-8 8-17t3-18q0-25-17.5-42.5T480 416q-9 0-18 3t-17 8l-57-57q19-17 42.5-25.5T480 336q58 0 99 41t41 99q0 26-8.5 49.5T586 568Zm228 228-58-58q22-37 33-78t11-84q0-134-93-227t-227-93q-43 0-84 11t-78 33l-58-58q49-32 105-49t115-17q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 59-17 115t-49 105ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-59 16.5-115T145 355L27 236l57-57 792 792-57 57-615-614q-22 37-33 78t-11 84q0 57 19 109t55 95q54-41 116.5-62.5T480 696q38 0 76 8t74 22l133 133q-57 57-130 87t-153 30Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOff.displayName = 'AmauiIconMaterialAccountCircleOff';

export default IconMaterialAccountCircleOff;
