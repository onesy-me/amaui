import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffFilled'

      short_name='WarningOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 816q17 0 28.5-11.5T520 776q0-17-11.5-28.5T480 736q-17 0-28.5 11.5T440 776q0 17 11.5 28.5T480 816Zm395 42L375 358l105-182 395 682Zm-56 170-92-92H40l252-435L27 236l57-57 792 792-57 57ZM440 696h47l-47-47v47Z"/>
    </Icon>
  );
});

IconMaterialWarningOffFilled.displayName = 'AmauiIconMaterialWarningOffFilled';

export default IconMaterialWarningOffFilled;
