import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapasW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasW100Filled'

      short_name='Tapas'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-60v-386h-86q-31.08 0-52.54-21.44Q126-488.89 126-519.94q0-31.06 21.46-52.56Q168.92-594 200-594h86v-52h-86q-31.08 0-52.54-21.44Q126-688.89 126-719.94q0-31.06 21.46-52.56Q168.92-794 200-794h86v-106h28v106h86q31.08 0 52.54 21.44Q474-751.11 474-720.06q0 31.06-21.46 52.56Q431.08-646 400-646h-86v52h86q31.08 0 52.54 21.44Q474-551.11 474-520.06q0 31.06-21.46 52.56Q431.08-446 400-446h-86v386h-28Zm320 0v-28h80v-338q-50-13-85-48.5T566-560v-340h268v340q0 50-35 85.5T714-426v338h80v28H606Zm-12-634h212v-178H594v178Z"/>
    </Icon>
  );
});

IconMaterialTapasW100Filled.displayName = 'OnesyIconMaterialTapasW100Filled';

export default IconMaterialTapasW100Filled;
