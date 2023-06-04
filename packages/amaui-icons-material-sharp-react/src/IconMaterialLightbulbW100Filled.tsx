import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightbulbW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbW100Filled'

      short_name='Lightbulb'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.9q-.65 0-1.137-.425-.488-.425-.613-1.075h3.5q-.125.65-.613 1.075-.487.425-1.137.425Zm-3.35-3.5v-.7h6.7v.7Zm0-2.7q-1.325-.9-2.088-2.238Q5.8 11.125 5.8 9.5q0-2.6 1.8-4.4Q9.4 3.3 12 3.3q2.6 0 4.4 1.8 1.8 1.8 1.8 4.4 0 1.625-.762 2.962-.763 1.338-2.088 2.238Z"/>
    </Icon>
  );
});

IconMaterialLightbulbW100Filled.displayName = 'AmauiIconMaterialLightbulbW100Filled';

export default IconMaterialLightbulbW100Filled;
