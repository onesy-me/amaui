import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllMatchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchFilled'

      short_name='AllMatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m691 906 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520 816q0-83 58.5-141.5T720 616q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016ZM120 856l180-280-180-280h522l185 261q-24-10-55.5-16t-57.5-5q-118 2-196 85.5T440 817q0 10 .5 19.5T443 856H120Z"/>
    </Icon>
  );
});

IconMaterialAllMatchFilled.displayName = 'AmauiIconMaterialAllMatchFilled';

export default IconMaterialAllMatchFilled;
