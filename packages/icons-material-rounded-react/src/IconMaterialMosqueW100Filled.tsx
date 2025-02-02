import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMosqueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueW100Filled'

      short_name='Mosque'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-602q-31 0-52.5-21.5T266-676q0-33 16-61.5t43-46.5l139-94q7-5 16-5t16 5l139 94q27 18 43 46.5t16 61.5q0 31-21.5 52.5T620-602H340ZM66-174v-452q-18-8-29-22t-11-32q0-16 13-36.5T80-763q28 26 41 46.5t13 36.5q0 18-11 32t-29 22v212h132v-106q0-23 15.5-38.5T280-574h400q23 0 38.5 15.5T734-520v106h132v-212q-18-8-29-22t-11-32q0-16 13-36.5t41-46.5q28 26 41 46.5t13 36.5q0 18-11 32t-29 22v452q0 11-8.5 19.5T866-146H576q-13 0-21.5-8.5T546-176v-104q0-27-19.5-46.5T480-346q-27 0-46.5 19.5T414-280v104q0 13-8.5 21.5T384-146H94q-11 0-19.5-8.5T66-174Z"/>
    </Icon>
  );
});

IconMaterialMosqueW100Filled.displayName = 'OnesyIconMaterialMosqueW100Filled';

export default IconMaterialMosqueW100Filled;
