import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardTravelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelW100'

      short_name='CardTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-302v70q0 12 10 22t22 10h576q12 0 22-10t10-22v-70H160Zm172-366v-60q0-26 17-43t43-17h176q26 0 43 17t17 43v60h140q26 0 43 17t17 43v376q0 26-17 43t-43 17H192q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h140ZM160-378h640v-230q0-12-10-22t-22-10H628v46q0 6-4 10t-10 4q-6 0-10-4t-4-10v-46H360v46q0 6-4 10t-10 4q-6 0-10-4t-4-10v-46H192q-12 0-22 10t-10 22v230Zm200-290h240v-60q0-12-10-22t-22-10H392q-12 0-22 10t-10 22v60ZM160-232v-408 60-60 60-60h32q-12 0-22 10t-10 22v376q0 12 10 22t22 10h-32v-32Z"/>
    </Icon>
  );
});

IconMaterialCardTravelW100.displayName = 'OnesyIconMaterialCardTravelW100';

export default IconMaterialCardTravelW100;
