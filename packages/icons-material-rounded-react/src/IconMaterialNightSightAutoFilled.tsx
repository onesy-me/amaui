import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoFilled'

      short_name='NightSightAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120q-134 0-227-93t-93-227q0-58 19-110.5t53-94q34-41.5 81.5-69T377-748q25-3 39 17.5t1 42.5q-12 20-14.5 42.5T400-600q0 100 70 170t170 70q12 0 24-.5t24-4.5q21-8 37.5 7.5T735-321q-29 94-112 147.5T440-120Zm216-480-20 56q-4 11-13 17.5t-20 6.5q-19 0-29.5-15.5T569-568l102-287q4-11 14-18t22-7h26q12 0 22 7t14 18l102 287q6 17-4.5 32.5T837-520q-11 0-20-6.5T804-544l-20-56H656Zm18-54h92l-46-146-46 146Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoFilled.displayName = 'OnesyIconMaterialNightSightAutoFilled';

export default IconMaterialNightSightAutoFilled;
