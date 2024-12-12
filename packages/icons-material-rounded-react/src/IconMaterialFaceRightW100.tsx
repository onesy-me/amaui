import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFaceRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRightW100'

      short_name='FaceRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M611-499q-12.33 0-20.66-8.68-8.34-8.67-8.34-21.5 0-12.82 8.47-21.32 8.48-8.5 21-8.5 12.53 0 21.53 8.68 9 8.67 9 21.5 0 12.82-8.91 21.32-8.92 8.5-22.09 8.5Zm-182.18 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM404-789q-65 22-107.5 74T243-595q63-26 108-76.5T404-789Zm75-11q-17 0-34 2.5t-34 7.5q33 68 98 106.5T650-646q14 0 26.5-1t25.5-5q-28-68-89-108t-134-40Zm269 240q0 70.13-33 129.07Q682-372 628-336q-8 5-13.5 3.5T606-339q-3-5-3-10t5-8q51-32 81.5-85T720-560q0-17.03-2.5-32.52Q715-608 710-624q-14 3-28.5 4.5T653-618q-69 2-130.5-27T417-727q-25 58-71 100.5T240-564v3q-1 65 30 118.5t82 85.5q5 3 5 8t-3 10q-3 5-8.5 6.5T332-336q-54-36-87-94.93-33-58.94-33-129.07 0-112.22 77.84-190.11 77.84-77.89 190-77.89T670-750.11q78 77.89 78 190.11ZM555-181H365q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h190l-80-79q-4-4-3.5-10t4.57-10q4.07-4 9.5-4t9.43 4l92 92q9 9.27 9 21.64 0 12.36-9 21.36l-92 92q-4.09 4-9.55 4-5.45 0-9.45-4-4-4-4.5-10t3.5-10l80-80ZM404-789Zm7-1Z"/>
    </Icon>
  );
});

IconMaterialFaceRightW100.displayName = 'OnesyIconMaterialFaceRightW100';

export default IconMaterialFaceRightW100;
