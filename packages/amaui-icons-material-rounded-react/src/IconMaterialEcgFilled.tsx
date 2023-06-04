import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgFilled'

      short_name='Ecg'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 536V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v254q-17-7-34.5-10.5T810 576q-23 0-46 6t-44 17q-9-5-19-9t-21-7v-7q0-17-11.5-28.5T640 536h-95l-69-138q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280 646l-44-88q-5-11-15-16.5t-21-5.5H80Zm80 360q-33 0-56.5-23.5T80 816V616h95l69 138q5 11 15 16.5t21 5.5q11 0 21-5.5t15-16.5l124-248 44 88q5 9 12.5 14.5T514 616q-34 26-54 65t-20 85q0 42 12.5 70.5T493 896H160Zm470-240q27 0 50 12t40 35q17-23 40-35t50-12q46 0 78 32t32 78q0 36-26 69.5T780 944l-34 30q-11 10-26 10t-26-10l-34-30q-88-75-114-108.5T520 766q0-46 32-78t78-32Z"/>
    </Icon>
  );
});

IconMaterialEcgFilled.displayName = 'AmauiIconMaterialEcgFilled';

export default IconMaterialEcgFilled;
