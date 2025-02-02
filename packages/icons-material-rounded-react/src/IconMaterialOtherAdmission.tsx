import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOtherAdmission = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherAdmission'

      short_name='OtherAdmission'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M610-210q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm110 0q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm110 0q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm-630 90q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q0 17-11.5 28.5T800-520q-17 0-28.5-11.5T760-560v-200H200v560h200q17 0 28.5 11.5T440-160q0 17-11.5 28.5T400-120H200Zm0-120v40-560 243-3 280Zm80-80q0 17 11.5 28.5T320-280h83q17 0 28.5-11.5T443-320q0-17-11.5-28.5T403-360h-83q-17 0-28.5 11.5T280-320Zm0-160q0 17 11.5 28.5T320-440h200q17 0 28.5-11.5T560-480q0-17-11.5-28.5T520-520H320q-17 0-28.5 11.5T280-480Zm0-160q0 17 11.5 28.5T320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/>
    </Icon>
  );
});

IconMaterialOtherAdmission.displayName = 'OnesyIconMaterialOtherAdmission';

export default IconMaterialOtherAdmission;
