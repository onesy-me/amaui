import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTsunamiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TsunamiW100'

      short_name='Tsunami'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-188q-30 20-64 31t-69 11q-36 0-69.5-11.5T213-187q-22 13-45 22.5T120-150q-5 1-9.5-3t-4.5-9q0-6 4-10t10-6q20-4 38-12.5t35-19.5q9-6 20-6t20 6q26 16 55 25.5t59 9.5q29 0 57-7.5t53-22.5q11-7 24.5-7t24.5 7q25 15 52.5 22.5T615-175q32 0 62-10.5t56-27.5q8-5 16-4.5t16 5.5q17 11 36 19.5t39 13.5q6 2 10 6.5t4 10.5q0 6-4.5 10t-10.5 2q-24-5-46.5-15T749-187q-31 18-64.5 29.5T615-146q-36 0-70-11.5T480-188Zm-374-88v-104q0-88 34-163t94.5-129.5q60.5-54.5 144-85T560-788q11 0 22.5.5T605-786q14 2 22 14t3 26q-8 21-12 38.5t-4 40.5q0 66 46.5 112.5T773-508h67q6 0 10 4t4 10q0 6-4 10t-10 4h-67q-78 0-132.5-54.5T586-667q0-23 5.5-49.5T605-763q-101 16-166 86t-65 164q0 53 13.5 97.5T433-323l32-19q8-5 16-5t16 5q26 17 56 28t62 11q32 0 62-12t57-28q8-5 15-5t15 5l32 19q11 6 21.5 10t21.5 7q6 2 10.5 6.5T854-290q0 5-4.5 9t-9.5 2q-19-5-41-14t-50-25q-36 22-69.5 33T615-274q-29 0-65.5-12T481-318q-40 25-69.5 34.5T347-274q-35 0-65.5-9T213-315q-26 15-53.5 25T106-276Zm239-27q17 0 34-2.5t28-6.5q-33-53-47-99t-14-102q0-94 54-164t151-102v19q-91 2-168 31.5T251-649q-55 50-86 119t-31 150v66q17-3 32.5-10t30.5-16q8-5 16-4.5t15 5.5q11 7 21.5 12.5T272-316q17 7 35 10t38 3Zm-2-238Z"/>
    </Icon>
  );
});

IconMaterialTsunamiW100.displayName = 'OnesyIconMaterialTsunamiW100';

export default IconMaterialTsunamiW100;
