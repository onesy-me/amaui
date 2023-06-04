import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveForwardWordFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveForwardWordFilled'

      short_name='TextSelectMoveForwardWord'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 936v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm87 320H480q-17 0-28.5-11.5T440 576q0-17 11.5-28.5T480 536h207l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708 708q-11 11-27.5 11.5T652 708q-11-11-11-28t11-28l35-36ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h80q33 0 56.5 23.5T360 296v560q0 33-23.5 56.5T280 936h-80Zm560-640v-80q33 0 56.5 23.5T840 296h-80Zm0 640v-80h80q0 33-23.5 56.5T760 936Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveForwardWordFilled.displayName = 'AmauiIconMaterialTextSelectMoveForwardWordFilled';

export default IconMaterialTextSelectMoveForwardWordFilled;
