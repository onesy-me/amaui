import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageW100Filled'

      short_name='Image'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm116-134h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8Z"/>
    </Icon>
  );
});

IconMaterialImageW100Filled.displayName = 'OnesyIconMaterialImageW100Filled';

export default IconMaterialImageW100Filled;
