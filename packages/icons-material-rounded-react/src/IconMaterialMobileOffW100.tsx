import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffW100'

      short_name='MobileOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-66 54-840q-4-4-4.5-9.5T54-860q5-5 10-5t10 5L848-86q4 4 4.5 9.5T848-66q-5 5-10 5t-10-5ZM252-662l28 28v420h401l27 27v35q0 24.75-17.62 42.37Q672.75-92 648-92H312q-24.75 0-42.37-17.63Q252-127.25 252-152v-510Zm28 476v34q0 14 9 23t23 9h336q14 0 23-9t9-23v-34H280Zm0 0v66-66Zm31-560q-5.67 0-9.33-4.04-3.67-4.03-3.67-10 0-5.96 4.02-9.96 4.03-4 9.98-4h368v-34q0-14-9-23t-23-9H286q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h362q26 0 43 17t17 43v428q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-366H311Zm155-28Z"/>
    </Icon>
  );
});

IconMaterialMobileOffW100.displayName = 'OnesyIconMaterialMobileOffW100';

export default IconMaterialMobileOffW100;
