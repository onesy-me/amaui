import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFramePersonOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOffW100Filled'

      short_name='FramePersonOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m842-78-54-54H654q-6 0-10-4t-4-10q0-6 4-10t10-4h106L634-286H296q-13 0-21.5-8.5T266-316v-20q0-15 7.5-27.5T294-384q42-25 89.5-37.5T480-434h6L160-760v106q0 6-4 10t-10 4q-6 0-10-4t-4-10v-134l-32-32q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Zm-14-228v62l-28-28v-34q0-6 4-10t10-4q6 0 10 4t4 10ZM192-132q-26 0-43-17t-17-43v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm608-522v-114q0-12-10-22t-22-10H654q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v114q0 6-4 10t-10 4q-6 0-10-4t-4-10ZM244-828h62q6 0 10 4t4 10q0 6-4 10t-10 4h-34l-28-28Zm330 248q0 17-5.5 32.5T552-520L420-652q12-11 27.5-16.5T480-674q38 0 66 28t28 66Z"/>
    </Icon>
  );
});

IconMaterialFramePersonOffW100Filled.displayName = 'OnesyIconMaterialFramePersonOffW100Filled';

export default IconMaterialFramePersonOffW100Filled;
