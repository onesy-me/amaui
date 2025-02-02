import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2W100'

      short_name='Person2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-512q-13.71 0-22.86-10-9.14-10-7.14-24l12-95q5-38 35-62.5t69-24.5q39 0 69 24.5t35 62.5l12 95q2 14-7.14 24-9.15 10-22.86 10H394Zm-3-28h178l-13-96q-4-28-25.5-46T480-700q-29 0-50.5 18T404-636l-13 96Zm89 0ZM212-232v-52q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q54 0 108.5 13T698-356q23 11 36.5 30.5T748-284v52H212Zm28-28h480v-24q0-14-9.5-26.5T684-332q-48-23-99.69-35.5Q532.63-380 480-380t-104.31 12.5Q324-355 276-332q-17 9-26.5 21.5T240-284v24Zm240 0Z"/>
    </Icon>
  );
});

IconMaterialPerson2W100.displayName = 'OnesyIconMaterialPerson2W100';

export default IconMaterialPerson2W100;
