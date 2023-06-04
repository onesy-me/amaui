import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopRight'

      short_name='ArrowTopRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M647 496H280v360q0 17-11.5 28.5T240 896q-17 0-28.5-11.5T200 856V496q0-33 23.5-56.5T280 416h367L532 300q-11-11-11.5-27.5T532 244q11-11 28-11t28 11l184 184q12 12 12 28t-12 28L588 668q-12 12-28 11.5T532 667q-11-12-11.5-28t11.5-28l115-115Z"/>
    </Icon>
  );
});

IconMaterialArrowTopRight.displayName = 'AmauiIconMaterialArrowTopRight';

export default IconMaterialArrowTopRight;
