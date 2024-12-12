import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkeletonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkeletonW100Filled'

      short_name='Skeleton'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-37 0-64.5-7.5T354-169l-109-69q-17-11-25-30.5t-8-37.5q0-43 31.5-67.5T312-398q20 0 39 6t33 19q17 16 38 25t44 11v-122q-49-1-93.5-9.5T294-492q-34-15-54-37t-20-50q0-20 14-37t39-32q-6-9-9.5-20t-3.5-23q0-22 16.5-41t45.5-34q-2-5-2-9v-9q0-26 27.5-45.5T420-860v28q-42 11-57 25.5T348-784q0 35 45.5 45.5T466-726v-154h28v154q32-1 75-11.5t43-46.5q0-8-15-22t-56-25v-29q45 11 72 31t27 45q0 2-2 18 29 15 45.5 34t16.5 41q0 12-3 22.5t-9 19.5q25 15 38.5 32.5T740-579q0 28-20 50t-54 37q-34 15-78.5 23.5T494-459v122q23-2 44-11t38-25q14-13 33-19t39-6q37 0 68.5 25t31.5 68q0 18-8 37t-25 30l-109 69q-34 22-61.5 29.5T480-132Zm-14-355v-92q-53-2-99.5-13T291-627q-26 14-34.5 27t-8.5 21q0 38 63.5 64T466-487ZM330-264q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm136-343v-91q-40-2-75.5-11.5T336-741q-27 14-37.5 27T288-691q0 42 56 62t122 22Zm28 120q91-2 154.5-28t63.5-64q0-8-9-21t-35-27q-29 23-75 34.5T494-579v92Zm0-120q66-2 122-22t56-62q0-10-10.5-23T624-741q-19 22-54.5 31.5T494-698v91Zm136 343q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Z"/>
    </Icon>
  );
});

IconMaterialSkeletonW100Filled.displayName = 'OnesyIconMaterialSkeletonW100Filled';

export default IconMaterialSkeletonW100Filled;
