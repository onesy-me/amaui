import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleFilled'

      short_name='Shuffle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.175 10.575 4.7 6.1q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.475 4.475ZM15 20q-.425 0-.712-.288Q14 19.425 14 19t.288-.712Q14.575 18 15 18h1.6l-3.2-3.2 1.425-1.425L18 16.55V15q0-.425.288-.713Q18.575 14 19 14t.712.287Q20 14.575 20 15v4q0 .425-.288.712Q19.425 20 19 20Zm-10.3-.7q-.275-.275-.275-.7 0-.425.275-.7L16.6 6H15q-.425 0-.712-.287Q14 5.425 14 5t.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5v4q0 .425-.288.712Q19.425 10 19 10t-.712-.288Q18 9.425 18 9V7.4L6.1 19.3q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialShuffleFilled.displayName = 'AmauiIconMaterialShuffleFilled';

export default IconMaterialShuffleFilled;
