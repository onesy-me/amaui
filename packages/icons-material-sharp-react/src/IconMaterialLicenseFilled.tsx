import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLicenseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LicenseFilled'

      short_name='License'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialLicenseFilled.displayName = 'OnesyIconMaterialLicenseFilled';

export default IconMaterialLicenseFilled;
