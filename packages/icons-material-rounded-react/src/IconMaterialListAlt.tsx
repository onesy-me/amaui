import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAlt'

      short_name='ListAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 320h160q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360H480q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160h160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H480q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160h160q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H480q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialListAlt.displayName = 'OnesyIconMaterialListAlt';

export default IconMaterialListAlt;
