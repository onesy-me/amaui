import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApkInstallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstallFilled'

      short_name='ApkInstall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80 640-240l56-57 64 63v-166h80v166l64-63 56 57L800-80ZM80-80v-800h400l240 240v170H600v390H80Zm360-520h200L440-800v200ZM200-200h400q-4-49-30-90t-68-65l38-68q2-4 1-9t-6-7q-4-2-8.5-1t-6.5 5l-39 70q-20-8-40-12.5t-41-4.5q-21 0-41 4.5T319-365l-39-70q-2-5-6.5-5t-9.5 2l-4 15 38 68q-42 24-68 65t-30 90Zm110-60q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm180 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Z"/>
    </Icon>
  );
});

IconMaterialApkInstallFilled.displayName = 'OnesyIconMaterialApkInstallFilled';

export default IconMaterialApkInstallFilled;
