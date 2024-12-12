import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDifferenceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceW100'

      short_name='Difference'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M526-626v66q0 5.95 4.04 9.97 4.03 4.03 10 4.03 5.96 0 9.96-4.03 4-4.02 4-9.97v-66h66q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-66v-66q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v66h-66q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66Zm-66 240h160q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H460q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4ZM352-252q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h249q12.44 0 23.72 5T644-850l126 126q8 8 13 19.28 5 11.28 5 23.72v369q0 26-17 43t-43 17H352Zm0-28h376q12 0 22-10t10-22v-380L612-840H352q-12 0-22 10t-10 22v496q0 12 10 22t22 10ZM192-92q-26 0-43-17t-17-43v-462q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v462q0 12 10 22t22 10h342q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192Zm128-188v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDifferenceW100.displayName = 'OnesyIconMaterialDifferenceW100';

export default IconMaterialDifferenceW100;
