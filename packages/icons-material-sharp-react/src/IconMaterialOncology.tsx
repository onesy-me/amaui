import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOncology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Oncology'

      short_name='Oncology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-240q0-50 35-85t85-35h80q50 0 85-35t35-85q0-17-11.5-28.5T400-600q-33 0-56.5-23.5T320-680v-200h80v200q50 0 85 35t35 85q0 83-58.5 141.5T320-360h-80q-17 0-28.5 11.5T200-320v240h-80Zm280-600v-200 200q50 0 85 35t35 85q0 83-58.5 141.5T320-360h-80q-17 0-28.5 11.5T200-320v240-240q0-17 11.5-28.5T240-360h80q83 0 141.5-58.5T520-560q0-50-35-85t-85-35Zm440 221q-17-16-37-27.5T760-506v-14q0-83-58.5-141.5T560-720q-33 0-56.5-23.5T480-800v-80h80v80q117 0 198.5 81.5T840-520v61ZM280-80v-80q0-50 35-85t85-35h40q0 21 3.5 41t10.5 39h-54q-17 0-28.5 11.5T360-160v80h-80Zm400-120q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200ZM863-40 761-142q-18 11-38 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-6 43.5T817-198L919-96l-56 56Z"/>
    </Icon>
  );
});

IconMaterialOncology.displayName = 'OnesyIconMaterialOncology';

export default IconMaterialOncology;
