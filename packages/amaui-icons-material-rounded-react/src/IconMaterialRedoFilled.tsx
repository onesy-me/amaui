import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRedoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoFilled'

      short_name='Redo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 19q-2.425 0-4.162-1.575Q4 15.85 4 13.5q0-2.35 1.738-3.925Q7.475 8 9.9 8h6.3l-1.9-1.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l1.9-1.9H9.9q-1.575 0-2.737 1Q6 12 6 13.5T7.163 16q1.162 1 2.737 1H16q.425 0 .712.288.288.287.288.712t-.288.712Q16.425 19 16 19Z"/>
    </Icon>
  );
});

IconMaterialRedoFilled.displayName = 'AmauiIconMaterialRedoFilled';

export default IconMaterialRedoFilled;
