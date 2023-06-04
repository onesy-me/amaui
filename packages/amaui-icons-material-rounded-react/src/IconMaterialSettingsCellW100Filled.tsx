import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsCellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCellW100Filled'

      short_name='SettingsCell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 18.7q-.65 0-1.075-.425-.425-.425-.425-1.075V2.8q0-.65.425-1.075Q7.9 1.3 8.55 1.3h6.9q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm-.8-3.05h8.5V4.35h-8.5ZM8 23.7q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialSettingsCellW100Filled.displayName = 'AmauiIconMaterialSettingsCellW100Filled';

export default IconMaterialSettingsCellW100Filled;
