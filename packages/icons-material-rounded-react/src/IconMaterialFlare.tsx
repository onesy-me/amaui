import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flare'

      short_name='Flare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-480q0 17-11.5 28.5T240-440H80q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h160q17 0 28.5 11.5T280-480Zm58-142q-11 11-28 11t-28-11l-28-28q-11-11-11-28t11-28q11-11 28-11t28 11l28 28q11 11 11 28t-11 28Zm102-98v-160q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v160q0 17-11.5 28.5T480-680q-17 0-28.5-11.5T440-720Zm182 98q-11-11-11-28t11-28l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q-11 11-28 11t-28-11Zm58 142q0-17 11.5-28.5T720-520h160q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440H720q-17 0-28.5-11.5T680-480ZM480-360q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm142 22q11-11 28-11t28 11l28 28q11 11 11 28t-11 28q-11 11-28 11t-28-11l-28-28q-11-11-11-28t11-28Zm-284 0q11 11 11 28t-11 28l-28 28q-11 11-28 11t-28-11q-11-11-11-28t11-28l28-28q11-11 28-11t28 11Zm142 58q17 0 28.5 11.5T520-240v160q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80v-160q0-17 11.5-28.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialFlare.displayName = 'OnesyIconMaterialFlare';

export default IconMaterialFlare;
