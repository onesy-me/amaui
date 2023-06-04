import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllMatch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatch'

      short_name='AllMatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m266 776 130-200-130-200 130 200-20.5 31Q355 638 331 675.5t-44.5 69L266 776Zm-146 80 180-280-180-280h522l185 261q-27-11-55.5-16.5T714 536L600 376H266l130 200-130 200h177q-3 20-3 40t3 40H120Zm571 50 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520 816q0-83 58.5-141.5T720 616q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016Z"/>
    </Icon>
  );
});

IconMaterialAllMatch.displayName = 'AmauiIconMaterialAllMatch';

export default IconMaterialAllMatch;
