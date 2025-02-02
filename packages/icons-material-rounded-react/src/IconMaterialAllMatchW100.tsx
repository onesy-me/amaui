import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllMatchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchW100'

      short_name='AllMatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M488-480ZM255-252q-18.26 0-26.63-15.5-8.37-15.5 1.4-30.63L335-463q5-8 5-17t-5-17L229.77-661.87Q220-677 228.37-692.5 236.74-708 255-708h297q22.18 0 41.59 10 19.41 10 31.94 28.16L744-503q4 5 2.4 10.34T740-484q-5 3-10.09 2.83-5.09-.16-8.91-5.83L602-654q-9-12-21-19t-29-7H250l109 167q10 15 10 33t-10 33L250-280h211q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H255Zm441 41-29-29q-3.97-4-9.49-4-5.51 0-9.51 4.07t-4 9.5q0 5.43 4 9.43l33 33q6.55 7 15.27 7 8.73 0 15.73-7l80-79q4-4 4.5-9t-4.5-10q-4.24-4-10.12-4-5.88 0-9.88 4l-76 75Zm24 125q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Z"/>
    </Icon>
  );
});

IconMaterialAllMatchW100.displayName = 'OnesyIconMaterialAllMatchW100';

export default IconMaterialAllMatchW100;
