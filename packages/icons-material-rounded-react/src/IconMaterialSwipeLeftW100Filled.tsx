import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftW100Filled'

      short_name='SwipeLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M164-688h122q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H162q-12.75 0-21.37-8.63Q132-677.25 132-690v-124q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v92q82-62 161-91.5T483-843q107 0 196.5 45T818-676q4 5 1.75 10.5T813-660q-7.5 0-13.75-4T788-674q-50-66-130.5-103.5T483-815q-82 0-160 31t-159 96Zm309 556q-19 0-35.5-7T407-160L227-339q-5.5-6-5.75-15t6.75-15q7-6 15.5-7.5t17.5.5l125 30v-334q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v294h83v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160h84v-120q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v120h83v-40q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v160q0 56-39 95t-94.8 39H473Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftW100Filled.displayName = 'OnesyIconMaterialSwipeLeftW100Filled';

export default IconMaterialSwipeLeftW100Filled;
