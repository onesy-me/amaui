import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCwW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCwW100'

      short_name='Rotate90DegreesCw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M451-132q-64.08 0-120.04-24Q275-180 233-222q-42-42-66-97.93-24-55.94-24-119.98Q143-568 232.83-658q89.84-90 218.17-90h66l-86-86 20-24 124 124-124 124-20-24 86-86h-66q-117 0-198.5 81.5T171-440q0 117 81.5 198.5T451-160q35 0 69-8.5t65-25.5l20 20q-35 20-74.13 31-39.14 11-79.87 11Zm240-142L525-440l166-166 166 166-166 166Zm0-40 126-126-126-126-126 126 126 126Zm0-126Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCwW100.displayName = 'OnesyIconMaterialRotate90DegreesCwW100';

export default IconMaterialRotate90DegreesCwW100;
