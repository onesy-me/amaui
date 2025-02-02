import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFertileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FertileW100'

      short_name='Fertile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M506-771q32 40 61.5 82t57.5 85l155-116q7-5 15-6t16 3.25q8 3.75 12.5 11.17T828-696v216q0 72.21-27.39 135.72-27.39 63.51-74.35 110.49-46.96 46.98-110.43 74.39Q552.35-132 480.17-132q-72.17 0-135.73-27.4-63.56-27.41-110.57-74.39-47.02-46.98-74.44-110.49Q132-407.79 132-480v-216.08q0-7.92 4.5-15.42t12.5-11.25q8-4.25 16-3.25t15 6l154 116q28-43 58.5-84.5T455-770q5-6 11-9.5t14-3.5q8 0 14.63 3.12 6.63 3.12 11.37 8.88Zm-26 611q134 0 227-93t93-227v-220L616-562q-45-72-73-114t-63-84q-35 43-65 87t-71 111L160-700v220q0 134 93 227t227 93Zm0-300Z"/>
    </Icon>
  );
});

IconMaterialFertileW100.displayName = 'OnesyIconMaterialFertileW100';

export default IconMaterialFertileW100;
