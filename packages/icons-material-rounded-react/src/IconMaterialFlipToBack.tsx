import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipToBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBack'

      short_name='FlipToBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-440q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v440h440q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120H200Zm280-160q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280ZM320-760q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760Zm160 0q-17 0-28.5-11.5T440-800q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760Zm160 0q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760Zm160 0q-17 0-28.5-11.5T760-800q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760ZM320-600q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680q17 0 28.5 11.5T360-640q0 17-11.5 28.5T320-600Zm0 160q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440Zm0 160q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360q17 0 28.5 11.5T360-320q0 17-11.5 28.5T320-280Zm320 0q-17 0-28.5-11.5T600-320q0-17 11.5-28.5T640-360q17 0 28.5 11.5T680-320q0 17-11.5 28.5T640-280Zm160-320q-17 0-28.5-11.5T760-640q0-17 11.5-28.5T800-680q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600Zm0 160q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440Zm0 160q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280Z"/>
    </Icon>
  );
});

IconMaterialFlipToBack.displayName = 'OnesyIconMaterialFlipToBack';

export default IconMaterialFlipToBack;
