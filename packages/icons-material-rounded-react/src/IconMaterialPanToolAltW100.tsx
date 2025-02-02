import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltW100'

      short_name='PanToolAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-172q-20.96 0-39.98-9Q365-190 351-207L147-452q-6-8-5.5-17.5T150-485q8-7 19-6.5t20 5.5l143 86v-415q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v412q0 17-15.5 26t-30.5 0l-140-86 199.84 238.56Q384-213 396.8-206.5q12.8 6.5 27.2 6.5h230q45 0 75.5-30.5T760-306v-280q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v280q0 56-39 95t-95 39H424Zm43-174Zm22.04-374q5.96 0 9.96 4.03 4 4.02 4 9.97v200q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-200q0-5.95 4.04-9.97 4.03-4.03 10-4.03Zm143 50q5.96 0 9.96 4.03 4 4.02 4 9.97v150q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-150q0-5.95 4.04-9.97 4.03-4.03 10-4.03Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltW100.displayName = 'OnesyIconMaterialPanToolAltW100';

export default IconMaterialPanToolAltW100;
