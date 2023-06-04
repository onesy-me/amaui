import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadge'

      short_name='1xMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 776h80V376H200v80h80v320Zm180 0h80l70-127 70 127h80L650 576l110-200h-80l-70 127-70-127h-80l110 200-110 200ZM40 936V216h880v720H40Zm80-80h720V296H120v560Zm0 0V296v560Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadge.displayName = 'AmauiIconMaterial1xMobiledataBadge';

export default IconMaterial1xMobiledataBadge;
