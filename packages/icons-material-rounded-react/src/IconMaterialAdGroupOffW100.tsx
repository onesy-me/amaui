import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdGroupOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOffW100'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M802-768v454q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-406H378q-12.44 0-23.72-5t-19.19-12.91L274-799q8-14 22-21.5t30-7.5h416q24.75 0 42.38 17.62Q802-792.75 802-768ZM326-292q-24.75 0-42.37-17.63Q266-327.25 266-352v-302L114-806q-4-4-4.5-9.5T114-826q5-5 10-5t10 5l692 692q4 4 4.5 9.5T826-114q-5 5-10 5t-10-5L628-292H326Zm0-28h274L294-626v274q0 14 9 23t23 9ZM218-184q-24.75 0-42.37-17.63Q158-219.25 158-244v-430q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v430q0 14 9 23t23 9h430q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H218Zm231-287Zm86-79Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOffW100.displayName = 'OnesyIconMaterialAdGroupOffW100';

export default IconMaterialAdGroupOffW100;
