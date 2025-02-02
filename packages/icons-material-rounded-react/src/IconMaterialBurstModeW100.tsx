import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBurstModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeW100'

      short_name='BurstMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-266v-428q0-6 4-10t10-4q6 0 10 4t4 10v428q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm172 0v-428q0-6 4-10t10-4q6 0 10 4t4 10v428q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm232 14q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h336q26 0 43 17t17 43v336q0 26-17 43t-43 17H484Zm0-28h336q12 0 22-10t10-22v-336q0-12-10-22t-22-10H484q-12 0-22 10t-10 22v336q0 12 10 22t22 10Zm148-100-44-58q-5-6-12-6t-12 6l-31 42q-5 8-.5 16t13.5 8h212q9 0 13-8t-1-16l-50-68q-5-6-12-6t-12 6l-64 84ZM452-280v-400 400Z"/>
    </Icon>
  );
});

IconMaterialBurstModeW100.displayName = 'OnesyIconMaterialBurstModeW100';

export default IconMaterialBurstModeW100;
