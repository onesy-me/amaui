import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPsychiatryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychiatryFilled'

      short_name='Psychiatry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Z"/>
    </Icon>
  );
});

IconMaterialPsychiatryFilled.displayName = 'OnesyIconMaterialPsychiatryFilled';

export default IconMaterialPsychiatryFilled;
