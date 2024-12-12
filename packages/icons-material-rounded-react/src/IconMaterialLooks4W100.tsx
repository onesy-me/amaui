import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4W100'

      short_name='Looks4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-466v146q0 6 4 10t10 4q6 0 10-4t4-10v-320q0-6-4-10t-10-4q-6 0-10 4t-4 10v146H414v-146q0-6-4-10t-10-4q-6 0-10 4t-4 10v144q0 13 8.5 21.5T416-466h130ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialLooks4W100.displayName = 'OnesyIconMaterialLooks4W100';

export default IconMaterialLooks4W100;
