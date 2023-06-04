import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlucose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Glucose'

      short_name='Glucose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m222 650 96-72 102 65V216h80v573l-118-76 156 183h302V496h80v480H502L222 650Zm338-34V376h80v240h-80Zm140 0V416h80v200h-80ZM180 496q-59 0-99.5-40.5T40 358q0-34 13.5-59t63.5-82l63-72 63 73q51 59 64 83t13 57q0 57-41 97.5T180 496Zm0-80q25 0 42.5-17t17.5-41q0-17-8.5-30.5T185 272l-5-5-5 5q-32 36-43.5 54T120 358q0 24 17 41t43 17Zm0-58Zm660 538H500h340Z"/>
    </Icon>
  );
});

IconMaterialGlucose.displayName = 'AmauiIconMaterialGlucose';

export default IconMaterialGlucose;
