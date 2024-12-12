import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardOnscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOnscreen'

      short_name='KeyboardOnscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360H360q-17 0-28.5 11.5T320-320q0 17 11.5 28.5T360-280ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-440h640v-120H160v120Zm0 360h640v-280H160v280Zm0 0v-280 280Zm80-160q17 0 28.5-11.5T280-440q0-17-11.5-28.5T240-480q-17 0-28.5 11.5T200-440q0 17 11.5 28.5T240-400Zm120 0q17 0 28.5-11.5T400-440q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400Zm120 0q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400Zm120 0q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480q-17 0-28.5 11.5T560-440q0 17 11.5 28.5T600-400Zm120 0q17 0 28.5-11.5T760-440q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440q0 17 11.5 28.5T720-400Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOnscreen.displayName = 'OnesyIconMaterialKeyboardOnscreen';

export default IconMaterialKeyboardOnscreen;
