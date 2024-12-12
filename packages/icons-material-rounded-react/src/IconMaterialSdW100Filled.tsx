import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdW100Filled'

      short_name='Sd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm104-164h120q11 0 17.5-6.5T440-400v-70q0-11-6.5-17.5T416-494H300v-62h112v6q0 6 4 10t10 4q6 0 10-4t4-10v-10q0-11-6.5-17.5T416-584H296q-11 0-17.5 6.5T272-560v70q0 11 6.5 17.5T296-466h116v62H300v-6q0-6-4-10t-10-4q-6 0-10 4t-4 10v10q0 11 6.5 17.5T296-376Zm239 0h109q18 0 31-13t13-31v-120q0-18-13-31t-31-13H535q-6 0-10.5 4.5T520-569v178q0 6 4.5 10.5T535-376Zm13-28v-152h96q6 0 11 5t5 11v120q0 6-5 11t-11 5h-96Z"/>
    </Icon>
  );
});

IconMaterialSdW100Filled.displayName = 'OnesyIconMaterialSdW100Filled';

export default IconMaterialSdW100Filled;
