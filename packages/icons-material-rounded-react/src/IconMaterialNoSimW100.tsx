import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoSimW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimW100'

      short_name='NoSim'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M447-828h241q26 0 43 17t17 43v428q0 6-4 10t-10 4q-6 0-10-4t-4-10v-428q0-12-10-22t-22-10H434l-78 78q-4 4-9.5 4.5T336-722q-5-5-5-10t5-10l68-68q8-8 19.5-13t23.5-5ZM272-132q-26 0-43-17t-17-43v-401q0-12 5-23.5t13-19.5l20-20-142-142q-4-4-4.5-9.5T108-818q5-5 10-5t10 5l698 698q4 4 4.5 9.5T826-100q-5 5-10 5t-10-5L270-636l-30 30v414q0 12 10 22t22 10h416q12 0 22-10t10-22v-34l28 28v6q0 26-17 43t-43 17H272Zm265-390Zm-38 113Z"/>
    </Icon>
  );
});

IconMaterialNoSimW100.displayName = 'OnesyIconMaterialNoSimW100';

export default IconMaterialNoSimW100;
