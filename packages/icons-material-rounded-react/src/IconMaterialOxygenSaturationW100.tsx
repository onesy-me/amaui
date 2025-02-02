import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOxygenSaturationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturationW100'

      short_name='OxygenSaturation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M310-132q-18 0-31-11.5T266-172h-80q-39 0-66.5-27.5T92-266v-120q0-6 4-10t10-4q6 0 10 4t4 10v120q0 27 19.5 46.5T186-200h80q0-17 13-28.5t31-11.5h76v-66q0-6 4-10t10-4q6 0 10 4t4 10v66h132v-66q0-6 4-10t10-4q6 0 10 4t4 10v66h76q18 0 31 11.5t13 28.5h81q27 0 46.5-19.5T841-266v-120q0-6 4-10t10-4q6 0 10 4t4 10v120q0 39-27.5 66.5T775-172h-81q0 17-13 28.5T650-132H310ZM172-576q0-56 39-94.5t95-38.5h34q14 0 23-9t9-23v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 25-17.5 42.5T340-681h-34q-45 0-75.5 30.5T200-576q0 37 24 65t59 39q5 2 8 7t2 10q-1 5-6 8t-10 2q-46-7-75.5-45T172-576Zm616 0q0 48-29.5 86T683-445q-5 1-10-2t-6-8q-1-5 2-10t8-7q35-11 59-39t24-65q0-44-30.5-74.5T654-681h-34q-25 0-42.5-17.5T560-741v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 14 9 23t23 9h34q56 0 95 38.5t39 94.5ZM480-400Zm-11 0q-35 0-64-20.5T365-475q-8-23-28.5-34T293-520q-6 0-10-4t-4-10q0-6 4-10t10-4q33 0 60 16.5t38 47.5q8 25 30 40.5t48 15.5h22q26 0 48-15.5t30-40.5q11-31 38-47.5t60-16.5q6 0 10 4t4 10q0 6-4 10t-10 4q-23 0-43.5 11T595-475q-11 34-40 54.5T491-400h-22Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturationW100.displayName = 'OnesyIconMaterialOxygenSaturationW100';

export default IconMaterialOxygenSaturationW100;
