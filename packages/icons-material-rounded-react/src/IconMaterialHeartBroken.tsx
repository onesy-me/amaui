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
      <path d="M160-620q0 30 10.5 57t37.5 61.5q27 34.5 73 82.5t117 120q4 4 8.5 2.5t5.5-6.5l19-177q-52 0-83-40.5T331-610l38-133q-16-8-33.5-12.5T300-760q-58 0-99 41t-41 99Zm640 0q0-58-41-99t-99-41q-11 0-22 1.5t-22 5.5l-24 73q45 12 66.5 53.5T666-540l-52 175q-2 5 3.5 8.5T628-358q55-56 89-93.5t52.5-66Q788-546 794-569t6-51Zm-134 80Zm-335-70Zm150 464q-14 0-27.5-5T429-166q-109-96-177-161.5t-106.5-115Q107-492 93.5-533T80-620q0-92 64-156t156-64q66 0 116 25.5t36 73.5l-37 130q-5 20 6.5 35.5T453-560h67l-26 254q-1 8 6.5 9t9.5-6l74-245q6-20-6-36t-32-16h-66l61-181q11-35 46-47t73-12q92 0 156 64t64 156q0 44-16 87t-55.5 95q-39.5 52-106 117.5T534-166q-11 10-25 15t-28 5Z"/>
    </Icon>
  );
});

IconMaterialHeartBroken.displayName = 'OnesyIconMaterialHeartBroken';

export default IconMaterialHeartBroken;
