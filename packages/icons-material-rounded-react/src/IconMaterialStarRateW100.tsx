import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarRateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateW100'

      short_name='StarRate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122Zm96-38-113 86q-5 3-9.5 2.5T349-286q-4-2-6-6.5t0-9.5l43-142-106-77q-5.33-2.82-6.67-7.41Q272-533 274-538t5.53-7.5q3.53-2.5 8.47-2.5h134.44L466-692q1.73-5.31 5.37-8.16Q475-703 480-703q5 0 8.63 2.84 3.64 2.85 5.37 8.16l43.56 144H672q4.94 0 8.47 2.5Q684-543 686-538q2 5 .67 9.59-1.34 4.59-6.67 7.41l-106 77 43 142q2 5 0 9.5t-6 6.5q-4 2-8.5 2.5T593-286l-113-86Zm0-117Z"/>
    </Icon>
  );
});

IconMaterialStarRateW100.displayName = 'OnesyIconMaterialStarRateW100';

export default IconMaterialStarRateW100;
