import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionW100'

      short_name='Extension'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-172H200q-12 0-20-8t-8-20v-160q30-13 49-40t19-60q0-33-19-60t-49-40v-160q0-12 8-20t20-8h160q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h160q12 0 20 8t8 20v160q32 14 50 40.5t18 59.5q0 33-18 59.5T748-360v160q0 12-8 20t-20 8H560q-14-32-41-50t-59-18q-32 0-59 18t-41 50Zm-160-28h146q15-32 45.5-50t68.5-18q38 0 68.5 18t45.5 50h146v-182q35-6 51.5-29t16.5-49q0-26-16.5-49T720-538v-182H538q-6-35-29-51.5T460-788q-26 0-49 16.5T382-720H200v144q32 17 50 48.5t18 67.5q0 36-18 67.5T200-344v144Zm260-260Z"/>
    </Icon>
  );
});

IconMaterialExtensionW100.displayName = 'OnesyIconMaterialExtensionW100';

export default IconMaterialExtensionW100;
