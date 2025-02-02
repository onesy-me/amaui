import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocationW100Filled'

      short_name='MoveLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-547q0-120 78.5-200.5T405-828q116 0 194.5 80.5T678-547v16.5q0 8.5-2 16.5-44 14-77.5 41T544-409q-21 37-28 79.5t3 86.5q-17 19-35.5 37T446-170q-9 8-19.5 12.5T405-153q-11 0-21.5-4.5T364-170q-34-32-75-76t-75.5-93.5q-34.5-49.5-58-103T132-547Zm273 161q42 0 77.5-18.5T542-454q-30-20-64.5-30T405-494q-38 0-72.5 10T268-454q24 31 59.5 49.5T405-386Zm0-200q23 0 38.5-15.5T459-640q0-23-15.5-38.5T405-694q-23 0-38.5 15.5T351-640q0 23 15.5 38.5T405-586Zm412 305H628q-6 0-10-4t-4-10q0-6 4-10t10-4h189l-79-80q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l92 92q9 9 9 21t-9 21l-93 93q-4 4-9 4t-10-4q-5-4-4.5-10t4.5-10l79-80Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationW100Filled.displayName = 'OnesyIconMaterialMoveLocationW100Filled';

export default IconMaterialMoveLocationW100Filled;
