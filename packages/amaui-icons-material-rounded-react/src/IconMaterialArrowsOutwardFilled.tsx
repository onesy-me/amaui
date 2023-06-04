import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsOutwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsOutwardFilled'

      short_name='ArrowsOutward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m233 616 75 76q11 11 11.5 27.5T308 748q-11 11-28 11t-28-11L108 604q-12-12-12-28t12-28l144-144q11-11 27.5-11t28.5 11q12 12 12 28.5T308 461l-75 75h167q17 0 28.5 11.5T440 576q0 17-11.5 28.5T400 616H233Zm494 0H560q-17 0-28.5-11.5T520 576q0-17 11.5-28.5T560 536l168-1-76-75q-11-11-11-28t11-28q11-11 28-11t28 11l144 144q12 12 12 28t-12 28L708 748q-12 12-28 11.5T652 747q-11-12-11.5-28t11.5-28l75-75Z"/>
    </Icon>
  );
});

IconMaterialArrowsOutwardFilled.displayName = 'AmauiIconMaterialArrowsOutwardFilled';

export default IconMaterialArrowsOutwardFilled;
