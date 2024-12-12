import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsW100Filled'

      short_name='Earbuds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320.15-146Q248-146 197-196.9q-51-50.89-51-123.1v-400q0-39 29-66.5t67-27.5h92v188H174v306q0 60.83 42.62 103.42Q259.24-174 320.12-174t103.38-42.58Q466-259.17 466-320v-320q0-72.21 50.85-123.1 50.85-50.9 123-50.9T763-763.1q51 50.89 51 123.1v400q0 39-28 66.5T720-146h-94v-188h160v-306q0-60.83-42.62-103.42Q700.76-786 639.88-786T536.5-743.42Q494-700.83 494-640v320q0 72.21-50.85 123.11Q392.3-146 320.15-146Z"/>
    </Icon>
  );
});

IconMaterialEarbudsW100Filled.displayName = 'OnesyIconMaterialEarbudsW100Filled';

export default IconMaterialEarbudsW100Filled;
