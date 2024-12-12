import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPunchClockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockW100'

      short_name='PunchClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M228-132q-23.1 0-39.55-16.74Q172-165.49 172-189v-442q0-23.51 16.45-40.26Q204.9-688 228-688h55v-80q0-24.75 17.63-42.38Q318.25-828 343-828h275q24.75 0 42.38 17.62Q678-792.75 678-768v80h54q24 0 40 16.74 16 16.75 16 40.26v442q0 23.51-16 40.26Q756-132 732-132H228Zm83-556h339v-80q0-14-9-23t-23-9H343q-14 0-23 9t-9 23v80Zm-83 528h504q11 0 19.5-9t8.5-20v-442q0-11-8.5-20t-19.5-9H228q-11 0-19.5 9t-8.5 20v442q0 11 8.5 20t19.5 9Zm251-80q70.97 0 120.98-50Q650-340 650-409.5t-50.02-120Q549.97-580 479-580q-70.14 0-119.57 50.5Q310-479 310-409.5T359.43-290q49.43 50 119.57 50Zm.46-26Q420-266 378.5-307.5 337-349 337-409t41.59-101.5Q420.17-552 479-552q59.66 0 101.83 41.5T623-409q0 60-42.04 101.5-42.03 41.5-101.5 41.5ZM493-416v-69q0-5.2-3.86-9.1-3.85-3.9-9-3.9-5.14 0-9.14 3.9-4 3.9-4 9.1v69q0 5.57 2 10.78 2 5.22 7 10.22l37 37q4.09 4 9.55 4 5.45 0 9.45-3.86 4-3.85 4-9 0-5.14-4-9.14l-39-40Zm-13 6Z"/>
    </Icon>
  );
});

IconMaterialPunchClockW100.displayName = 'OnesyIconMaterialPunchClockW100';

export default IconMaterialPunchClockW100;
