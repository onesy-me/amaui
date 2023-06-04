import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpen'

      short_name='LeftPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 464v224q0 14 12 19t22-5l98-98q12-12 12-28t-12-28l-98-98q-10-10-22-5t-12 19ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm120-80V296H200v560h120Zm80 0h360V296H400v560Zm-80 0H200h120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpen.displayName = 'AmauiIconMaterialLeftPanelOpen';

export default IconMaterialLeftPanelOpen;
