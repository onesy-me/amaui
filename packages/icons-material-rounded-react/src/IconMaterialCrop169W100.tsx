import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop169W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169W100'

      short_name='Crop169'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-332q-26 0-43-17t-17-43v-176q0-26 17-43t43-17h496q26 0 43 17t17 43v176q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-176q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v176q0 12 10 22t22 10Zm-32 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialCrop169W100.displayName = 'OnesyIconMaterialCrop169W100';

export default IconMaterialCrop169W100;
