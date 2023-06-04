import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGynecologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GynecologyFilled'

      short_name='Gynecology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m364 954-29-58q-9-17-13-35t-4-37q0-23 6.5-45.5T345 736q8-11 12-23.5t4-26.5q0-16-6-30l-12-28q-10-19-16.5-39t-6.5-41V396q0-25-17.5-42.5T260 336q-21 0-37 14t-21 34q34 13 56 43.5t22 68.5q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-40 23-71t59-43q5-54 44.5-90t93.5-36q7 0 14 .5t14 2.5q44-23 92.5-33t99.5-10q50 0 98.5 10t92.5 33q7-2 14-2.5t14-.5q55 0 94.5 36t44.5 90q36 12 59 43t23 71q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-38 22-68.5t56-43.5q-5-20-21-34t-38-14q-25 0-42 17.5T640 396v152q0 21-7 41t-16 39q-7 14-12.5 28t-5.5 30q0 14 4 26.5t12 23.5q13 20 20 42.5t7 45.5q0 19-4.5 37T625 896l-29 58-72-36 29-58q5-8 7-17t2-19q0-12-4-23t-10-21q-14-20-21.5-44t-7.5-49q0-23 6.5-43.5T543 603q6-14 11.5-27.5T560 548V396q0-24 7.5-45.5T589 311q-26-8-53.5-11.5T480 296q-28 0-55.5 3.5T371 311q14 18 21.5 39.5T400 396v152q0 14 5 28t12 27q10 20 17 40.5t7 43.5q0 25-7.5 48.5T412 780q-7 10-10.5 21t-3.5 23q0 10 2 19t7 17l29 58-72 36Z"/>
    </Icon>
  );
});

IconMaterialGynecologyFilled.displayName = 'AmauiIconMaterialGynecologyFilled';

export default IconMaterialGynecologyFilled;
