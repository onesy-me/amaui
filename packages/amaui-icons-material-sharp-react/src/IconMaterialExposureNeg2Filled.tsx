import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureNeg2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg2Filled'

      short_name='ExposureNeg2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.1 19v-2.1l5-5.1q.825-.875 1.163-1.463Q18.6 9.75 18.6 9q0-.725-.562-1.313-.563-.587-1.688-.587-.9 0-1.487.5-.588.5-.813 1.3l-2-.8q.35-1.125 1.45-2.113Q14.6 5 16.4 5q2.075 0 3.238 1.188Q20.8 7.375 20.8 9q0 1.125-.525 2.05-.525.925-1.625 2.05L15 16.9l.05.1H21v2ZM10 14H3v-2h7Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg2Filled.displayName = 'AmauiIconMaterialExposureNeg2Filled';

export default IconMaterialExposureNeg2Filled;
