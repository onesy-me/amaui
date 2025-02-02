import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorReset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorReset'

      short_name='FormatColorReset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-133 0-226.5-92.5T160-436q0-51 16-98t48-90L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-96-96q-41 29-88 44.5T480-120Zm0-80q36 0 68.5-10t61.5-28L280-566q-21 32-30.5 64t-9.5 66q0 98 70 167t170 69Zm-37-204Zm263-254q60 60 81.5 136.5T791-367q-3 14-14 22t-25 8q-22 0-31.5-18t-4.5-38q15-55-5-110.5T650-600L480-768l-60 59q-11 11-28 10.5T364-710q-12-12-12-28.5t12-27.5l74-73q9-9 20-13t22-4q11 0 22 4.5t20 12.5l184 181Zm-128 78Z"/>
    </Icon>
  );
});

IconMaterialFormatColorReset.displayName = 'OnesyIconMaterialFormatColorReset';

export default IconMaterialFormatColorReset;
