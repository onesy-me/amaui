import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedAddFilled'

      short_name='ShutterSpeedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-40v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM360-840v-80h240v80H360ZM480-80q-75 0-140.5-28.5T225-186q-49-49-77-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q63 0 120 21t104 59l58-58 56 56-56 58q38 49 59 109.5T840-427q-14-5-35.5-9t-44.5-4q0-116-82-198t-198-82q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q11 0 21-.5t21-2.5q3 20 9.5 39.5T548-86q-17 3-34 4.5T480-80Zm40-123q1-45 16.5-84t42.5-70q27-31 63-51.5t78-28.5q0-11-1-21.5t-3-21.5H597L436-204q18 4 44 3.5t40-2.5Zm-40-317h226q-18-51-56-89.5T564-665l-84 145Zm-69 40 113-196q-51-10-102.5 3T327-625l84 145Zm-167 80h167L298-596q-35 39-49 90.5T244-400Zm152 185 84-145H254q17 50 55.5 89t86.5 56Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedAddFilled.displayName = 'OnesyIconMaterialShutterSpeedAddFilled';

export default IconMaterialShutterSpeedAddFilled;
