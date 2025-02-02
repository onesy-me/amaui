import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvMobiledataBadgeW100'

      short_name='EvMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M246-306h182v-28H274v-132h114v-28H274v-132h154v-28H246v348Zm354 0h32l110-348h-30l-96 304-96-304h-30l110 348ZM92-172v-616h776v616H92Zm28-28h720v-560H120v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialEvMobiledataBadgeW100.displayName = 'OnesyIconMaterialEvMobiledataBadgeW100';

export default IconMaterialEvMobiledataBadgeW100;
