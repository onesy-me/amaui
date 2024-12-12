import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartBroken = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBroken'

      short_name='HeartBroken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-83Q347-218 267.5-301t-121-138q-41.5-55-54-94T80-620q0-92 64-156t156-64q45 0 87 16.5t75 47.5l-62 216h120l-34 335 114-375H480l71-212q25-14 52.5-21t56.5-7q92 0 156 64t64 156q0 48-13 88t-55 95.5q-42 55.5-121 138T481-83Zm-71-186 21-211H294l75-263q-16-8-33.5-12.5T300-760q-58 0-99 41t-41 99q0 31 11.5 62t40 70.5q28.5 39.5 77 92T410-269Zm188-48q111-113 156.5-180T800-620q0-58-41-99t-99-41q-11 0-22 1.5t-22 5.5l-24 73h116L598-317Zm110-363ZM294-480Z"/>
    </Icon>
  );
});

IconMaterialHeartBroken.displayName = 'OnesyIconMaterialHeartBroken';

export default IconMaterialHeartBroken;
