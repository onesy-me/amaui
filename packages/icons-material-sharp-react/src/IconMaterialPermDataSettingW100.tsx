import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDataSettingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDataSettingW100'

      short_name='PermDataSetting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v361q-7-3-13.5-6t-14.5-5v-282L200-160h301q3 7 5.5 14t6.5 14H132Zm68-28 600-600-300 300-300 300Zm516 56-2-28q-21-4-39.5-13.5T642-172l-26 12-16-22 22-18q-8-23-8-46t8-46l-22-18 16-22 26 12q13-17 32-26.5t40-13.5l2-28h28l2 28q21 4 40 13.5t32 26.5l26-12 16 22-22 18q8 23 8 46t-8 46l22 18-16 22-26-12q-14 17-32.5 26.5T746-132l-2 28h-28Zm14-54q37 0 62.5-25.5T818-246q0-37-25.5-62.5T730-334q-37 0-62.5 25.5T642-246q0 37 25.5 62.5T730-158Z"/>
    </Icon>
  );
});

IconMaterialPermDataSettingW100.displayName = 'OnesyIconMaterialPermDataSettingW100';

export default IconMaterialPermDataSettingW100;
