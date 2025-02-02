import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsW100Filled'

      short_name='Contacts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.88-388q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm106-28h364q-45-36-90-52t-92-16q-47 0-92 16t-90 52Zm-98 116q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h560q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H200Zm0-684q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h560q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H200Z"/>
    </Icon>
  );
});

IconMaterialContactsW100Filled.displayName = 'OnesyIconMaterialContactsW100Filled';

export default IconMaterialContactsW100Filled;
