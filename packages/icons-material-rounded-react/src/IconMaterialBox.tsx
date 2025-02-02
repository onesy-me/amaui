import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Box'

      short_name='Box'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-640v440h560v-440H640v255q0 23-19 34.5t-39 1.5l-102-51-102 51q-20 10-39-1.5T320-385v-255H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm184 80v190l80-40 80 40v-190H400Zm-200 0h560-560Z"/>
    </Icon>
  );
});

IconMaterialBox.displayName = 'OnesyIconMaterialBox';

export default IconMaterialBox;
