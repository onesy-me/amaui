import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHtmlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HtmlFilled'

      short_name='Html'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-390v-180q0-13 8.5-21.5T30-600q13 0 21.5 8.5T60-570v50h80v-50q0-13 8.5-21.5T170-600q13 0 21.5 8.5T200-570v180q0 13-8.5 21.5T170-360q-13 0-21.5-8.5T140-390v-70H60v70q0 13-8.5 21.5T30-360q-13 0-21.5-8.5T0-390Zm310 0v-150h-40q-13 0-21.5-8.5T240-570q0-13 8.5-21.5T270-600h140q13 0 21.5 8.5T440-570q0 13-8.5 21.5T410-540h-40v150q0 13-8.5 21.5T340-360q-13 0-21.5-8.5T310-390Zm170 0v-170q0-17 11.5-28.5T520-600h180q17 0 28.5 11.5T740-560v170q0 13-8.5 21.5T710-360q-13 0-21.5-8.5T680-390v-150h-40v110q0 13-8.5 21.5T610-400q-13 0-21.5-8.5T580-430v-110h-40v150q0 13-8.5 21.5T510-360q-13 0-21.5-8.5T480-390Zm350 30q-13 0-21.5-8.5T800-390v-180q0-13 8.5-21.5T830-600q13 0 21.5 8.5T860-570v150h70q13 0 21.5 8.5T960-390q0 13-8.5 21.5T930-360H830Z"/>
    </Icon>
  );
});

IconMaterialHtmlFilled.displayName = 'OnesyIconMaterialHtmlFilled';

export default IconMaterialHtmlFilled;
