import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelW100Filled'

      short_name='Hotel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M105.96-252q-5.96 0-9.96-4.02-4-4.03-4-9.98v-468q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v334h346v-240q0-11 8.5-19.5T494-668h266q44.55 0 76.28 31.72Q868-604.55 868-560v294q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H120v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm173.92-234q-30.88 0-52.38-21.62-21.5-21.62-21.5-52.5t21.62-52.38q21.62-21.5 52.5-21.5t52.38 21.62q21.5 21.62 21.5 52.5t-21.62 52.38q-21.62 21.5-52.5 21.5Z"/>
    </Icon>
  );
});

IconMaterialHotelW100Filled.displayName = 'OnesyIconMaterialHotelW100Filled';

export default IconMaterialHotelW100Filled;
