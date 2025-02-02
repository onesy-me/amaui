import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToysAndGamesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysAndGamesW100'

      short_name='ToysAndGames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560v-56q-10 3-19.5 4.5T720-210q-62 0-105-44.06-43-44.07-43-105.94 0-61 43.47-103.5Q658.95-506 720-506q11 0 20.5 1.5T760-500v-60H544v-63.9q17-14.1 26.5-34.22Q580-678.25 580-700q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 22 8.5 42t25.5 34.1v63.9H200v60q10-3 19.5-4.5T240-506q61.05 0 104.52 42.5Q388-421 388-359.5T345-254q-43 44-105 44-11 0-20.5-1.5T200-216v56Zm588-88v116H172v-116h20q11 5 22.97 7.5Q226.94-238 240-238q49.5 0 84.75-35.25T360-358q0-49.5-35.25-84.75T240-478q-10.24 0-19.62 1.5T202-472h-30v-116h214v-24q-17-17-25.5-40t-8.5-48q0-54 37-91t91-37q54 0 91 37t37 91q0 25-8.5 48T574-612v24h214v116h-30q-9-3-18.3-4.5T720-478q-49.5 0-84.75 35.25T600-358q0 49.5 35.25 84.75T720-238q13.26 0 25.13-2.5T768-248h20ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialToysAndGamesW100.displayName = 'OnesyIconMaterialToysAndGamesW100';

export default IconMaterialToysAndGamesW100;
