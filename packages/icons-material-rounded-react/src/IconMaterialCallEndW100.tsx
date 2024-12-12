import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndW100'

      short_name='CallEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m133-343-51-49q-13-12-12.5-29.5T83-452q75-75 181.36-118.5Q370.73-614 479.86-614 589-614 695.5-570.5 802-527 877-452q13 13 13.5 30.5T878-392l-51 49q-14 13-30 15t-30-8l-76-58q-13-10-19-21.08-6-11.07-6-24.92v-111q-52-19-95-27t-91-8q-48 0-91 8t-95 27v111q0 13.85-6 24.92Q282-404 269-394l-76 58q-14 10-30 8t-30-15Zm133-199q-47 21-91 51t-73 59q-5 5-5 10t5 10l50 49q5 5 12.5 6.5T178-360l76-57q5-4 8.5-10t3.5-11v-104Zm428 0v104q0 5 3.5 11t8.5 10l76 57q6 5 13.5 3.5T808-363l50-49q5-5 5-10t-5-10q-29-29-73-59t-91-51Zm-428 0Zm428 0Z"/>
    </Icon>
  );
});

IconMaterialCallEndW100.displayName = 'OnesyIconMaterialCallEndW100';

export default IconMaterialCallEndW100;
