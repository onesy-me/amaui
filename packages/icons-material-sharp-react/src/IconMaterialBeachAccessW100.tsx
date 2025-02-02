import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBeachAccessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessW100'

      short_name='BeachAccess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M771-168 533-404l20-20 238 238-20 18Zm-532-56q-35-47-52-101t-17-110q0-69 25.5-133.5T273-684q52-52 116.5-77.5T521-787q57 0 110.5 17T733-718L239-224Zm4-44 78-78q-16-23-32-49t-28-56q-12-30-18.5-64.5T237-588q-44 77-39.5 161.5T243-268Zm100-98 248-250q-43-33-88-51.5T417.5-692q-40.5-6-73.5 1t-51 25q-18 18-25 51t-1.5 73.5q5.5 40.5 24 86T343-366Zm270-270 78-78q-75-44-160-47t-162 39q39-2 73.5 5.5T507-697q30 12 56.5 28t49.5 33Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessW100.displayName = 'OnesyIconMaterialBeachAccessW100';

export default IconMaterialBeachAccessW100;
