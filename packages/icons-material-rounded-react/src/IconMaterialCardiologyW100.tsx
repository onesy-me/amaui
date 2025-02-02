import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardiologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardiologyW100'

      short_name='Cardiology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-676q35-55 81-83.5t99-28.5q71 0 119.5 48.5T828-620q0 7-.5 13t-1.5 13q0 6-4 10t-10 4q-6 0-10-4t-4-10q1-7 1.5-13t.5-13q0-60-40.5-100T660-760q-45 0-83 23.5T504-662q-5 6-11.5 9.5T479-649q-7 0-13-3.5t-11-9.5q-35-51-72.5-74.5T300-760q-59 0-99.5 40T160-620q0 7 .5 13t1.5 13q0 6-4 10t-10 4q-6 0-10-4t-4-10q-1-7-1.5-13t-.5-13q0-71 48.5-119.5T300-788q53 0 99 28.5t81 83.5Zm0 484q-10 0-18.5-4.5T445-208q-16-14-63-60t-78-75q-5-5-4.5-10t4.5-9q4-4 9-4.5t10 4.5q31 31 70 67.5t87 80.5q48-44 87-80t70-68q5-5 10-4.5t9 4.5q4 4 4.5 9.5T656-342q-31 29-78.5 74.5T516-208q-8 8-16.5 12t-19.5 4Zm-38-154q4 0 6.5-2.5t4.5-6.5l71-213 59 89q5 6 11 9.5t14 3.5h272q6 0 10-4t4-10q0-6-4-10t-10-4H606l-75-113q-2-3-5.5-4.5T518-613q-4 0-7 2.5t-4 6.5l-71 214-61-91q-5-6-11-9.5t-14-3.5H80q-6 0-10 4t-4 10q0 6 4 10t10 4h272l76 114q2 4 6 5t8 1Zm38-141Z"/>
    </Icon>
  );
});

IconMaterialCardiologyW100.displayName = 'OnesyIconMaterialCardiologyW100';

export default IconMaterialCardiologyW100;
