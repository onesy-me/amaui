import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBluetooth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBluetooth'

      short_name='SettingsBluetooth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0ZM440-160v-304L256-280l-56-56 224-224-224-224 56-56 184 184v-304h40l228 228-172 172 172 172-228 228h-40Zm80-154 76-74-76-76v150Zm0-342 76-76-76-74v150Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetooth.displayName = 'OnesyIconMaterialSettingsBluetooth';

export default IconMaterialSettingsBluetooth;
