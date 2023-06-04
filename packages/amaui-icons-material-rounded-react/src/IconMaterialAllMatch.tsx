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
      <path d="m266 776 130-200-130-200 130 200-20.5 31Q355 638 331 675.5t-44.5 69L266 776Zm177 80H193q-24 0-35-21t2-41l140-218-140-218q-13-20-2-41t35-21h407q20 0 37.5 9t28.5 25l161 227q-27-11-55.5-16.5T714 536L600 376H266l130 200-130 200h177q-3 20-3 40t3 40Zm248-35-17-17q-9-9-21.5-9t-21.5 9q-9 9-9 21t9 21l39 39q9 9 21 9t21-9l97-95q9-9 9-21.5t-9-21.5q-9-9-21.5-9t-21.5 9l-75 74Zm29 195q-83 0-141.5-58.5T520 816q0-83 58.5-141.5T720 616q83 0 141.5 58.5T920 816q0 83-58.5 141.5T720 1016Z"/>
    </Icon>
  );
});

IconMaterialAllMatch.displayName = 'AmauiIconMaterialAllMatch';

export default IconMaterialAllMatch;
