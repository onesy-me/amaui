import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventW100Filled'

      short_name='Event'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-240q-33 0-56.5-23.5T520-320q0-33 23.5-56.5T600-400q33 0 56.5 23.5T680-320q0 33-23.5 56.5T600-240ZM232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-336H200v336q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialEventW100Filled.displayName = 'OnesyIconMaterialEventW100Filled';

export default IconMaterialEventW100Filled;
