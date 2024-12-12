import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckedBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBagW100Filled'

      short_name='CheckedBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M324-312v-356h68q0-36 26-62t62-26q36 0 62 26t26 62h68v356H324Zm96-356h120q0-26-17-43t-43-17q-26 0-43 17t-17 43Zm244 356v-356h24q26 0 43 17t17 43v236q0 26-17 43t-43 17h-24Zm-392 0q-26 0-43-17t-17-43v-236q0-26 17-43t43-17h24v356h-24ZM166-204q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h628q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H166Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagW100Filled.displayName = 'OnesyIconMaterialCheckedBagW100Filled';

export default IconMaterialCheckedBagW100Filled;
