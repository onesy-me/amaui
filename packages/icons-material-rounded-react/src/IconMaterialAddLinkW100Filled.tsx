import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLinkW100Filled'

      short_name='AddLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M684-328H581q-5 0-9-4.02-4-4.03-4-9.98 0-5 4.03-9.5 4.02-4.5 9.97-4.5h102v-102q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v102h102q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H712v102q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-102Zm-278 0H284q-63.08 0-107.54-44.44Q132-416.89 132-479.94q0-63.06 44.46-107.56T284-632h122q5 0 9.5 4.5t4.5 10q0 5.5-4.5 9.5t-9.5 4H283.88q-50.88 0-87.38 36.5Q160-531 160-480t36.5 87.5Q233-356 283.88-356H406q5 0 9.5 4.5t4.5 10q0 5.5-4.5 9.5t-9.5 4Zm-46-138q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H360Zm468-14h-28q0-51-36.5-87.5T676.12-604H553q-5 0-9-4.03-4-4.02-4-9.97 0-5 4.03-9.5 4.02-4.5 9.97-4.5h122q63.08 0 107.54 44.46Q828-543.08 828-480Z"/>
    </Icon>
  );
});

IconMaterialAddLinkW100Filled.displayName = 'OnesyIconMaterialAddLinkW100Filled';

export default IconMaterialAddLinkW100Filled;
