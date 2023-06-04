import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardCircleW100Filled'

      short_name='ForwardCircle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 780q81 0 140-55t64-136q0-5-4.2-9t-9.8-4q-6 0-10.071 3.92-4.072 3.92-4.929 10.08-5 68-55.736 115Q548.527 752 480 752q-72.914 0-124.457-51.561Q304 648.879 304 575.939 304 503 355.543 451.5T480 400h6l-37 37q-4.444 4.091-4.722 9.545Q444 452 449 457t10 5q5 0 10-5l60-60q5-4.636 5-10.818Q534 380 529 375l-61-61q-4-4-9.5-4.5T448 314q-5 5-5 10t5 10l38 38q-87 0-148.5 59T276 576q0 84.66 59.67 144.33Q395.34 780 480 780Zm.174 144Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialForwardCircleW100Filled.displayName = 'AmauiIconMaterialForwardCircleW100Filled';

export default IconMaterialForwardCircleW100Filled;
