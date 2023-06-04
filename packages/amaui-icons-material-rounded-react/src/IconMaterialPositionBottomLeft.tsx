import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomLeft'

      short_name='PositionBottomLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 776h280q17 0 28.5-11.5T600 736v-40q0-17-11.5-28.5T560 656H280q-17 0-28.5 11.5T240 696v40q0 17 11.5 28.5T280 776Zm-80 160q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm0-80h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomLeft.displayName = 'AmauiIconMaterialPositionBottomLeft';

export default IconMaterialPositionBottomLeft;
