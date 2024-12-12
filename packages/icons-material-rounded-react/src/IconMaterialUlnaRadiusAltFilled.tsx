import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUlnaRadiusAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UlnaRadiusAltFilled'

      short_name='UlnaRadiusAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-120q-30 0-58-11.5T385-164L104-426q-11-10-12.5-24.5T98-477l175-280q11-18 32-23.5t39 5.5q62 39 113 95t78 116q36-38 79.5-61T736-668q27-8 49.5-14.5T828-697q19-8 35.5 3t16.5 31v285q0 20-10 38.5T843-310L580-145q-19 12-40.5 18.5T494-120Zm16-140q17 0 28.5-11.5T550-300q0-2-4-17l142-89q5 8 13.5 12t18.5 4q17 0 28.5-11.5T760-430q0-14-9-25t-23-14q1-2 1.5-5t.5-6q0-17-11.5-28.5T690-520q-17 0-28.5 11.5T650-480q0 4 7 22l-142 88q-5-9-14.5-14.5T480-390q-17 0-28.5 11.5T440-350q0 14 9 25t23 14q-1 2-1.5 5t-.5 6q0 17 11.5 28.5T510-260Z"/>
    </Icon>
  );
});

IconMaterialUlnaRadiusAltFilled.displayName = 'OnesyIconMaterialUlnaRadiusAltFilled';

export default IconMaterialUlnaRadiusAltFilled;
