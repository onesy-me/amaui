import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpen'

      short_name='TopPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 756 160-160H320l160 160ZM200 416h560V296H200v120Zm0 440h560V496H200v360Zm0-440V296v120Zm-80 520V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpen.displayName = 'AmauiIconMaterialTopPanelOpen';

export default IconMaterialTopPanelOpen;
