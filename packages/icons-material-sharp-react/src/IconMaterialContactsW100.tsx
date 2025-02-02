import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsW100'

      short_name='Contacts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-124v-28h588v28H186Zm0-684v-28h588v28H186Zm293.88 420q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM132-212v-536h696v536H132Zm166-28q45-36 90-52t92-16q47 0 92 16t90 52h138v-480H160v480h138Zm50 0h264q-29-20-62.5-30T480-280q-36 0-69.5 10T348-240Zm132-176q-27 0-46.5-19.5T414-482q0-27 19.5-46.5T480-548q27 0 46.5 19.5T546-482q0 27-19.5 46.5T480-416Zm0-64Z"/>
    </Icon>
  );
});

IconMaterialContactsW100.displayName = 'OnesyIconMaterialContactsW100';

export default IconMaterialContactsW100;
