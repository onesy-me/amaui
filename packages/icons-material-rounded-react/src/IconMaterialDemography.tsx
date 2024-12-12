import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDemography = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Demography'

      short_name='Demography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-240q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-173q17 25 43 39t56 14Zm-520 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q0 17-11.5 28.5T800-520q-17 0-28.5-11.5T760-560v-200H200v560h200q17 0 28.5 11.5T440-160q0 17-11.5 28.5T400-120H200Zm0-120v40-560 243-3 280Zm80-80q0 17 11.5 28.5T320-280h83q17 0 28.5-11.5T443-320q0-17-11.5-28.5T403-360h-83q-17 0-28.5 11.5T280-320Zm0-160q0 17 11.5 28.5T320-440h200q17 0 28.5-11.5T560-480q0-17-11.5-28.5T520-520H320q-17 0-28.5 11.5T280-480Zm0-160q0 17 11.5 28.5T320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/>
    </Icon>
  );
});

IconMaterialDemography.displayName = 'OnesyIconMaterialDemography';

export default IconMaterialDemography;
