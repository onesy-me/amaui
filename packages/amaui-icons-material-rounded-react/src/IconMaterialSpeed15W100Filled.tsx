import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed15W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed15W100Filled'

      short_name='Speed15'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M331.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-274q0-14-9-23t-23-9h-34q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h34q24.75 0 42.38 17.62Q346-618.75 346-594v274q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM548-306q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h114q14 0 23-9t9-23v-68q0-14-9-23t-23-9h-68q-24.75 0-42.37-17.63Q534-501.25 534-526v-68q0-24.75 17.63-42.38Q569.25-654 594-654h114q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H594q-14 0-23 9t-9 23v68q0 14 9 23t23 9h68q26 0 43 17t17 43v68q0 26-17 43t-43 17H548Zm-108.04 0q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4Z"/>
    </Icon>
  );
});

IconMaterialSpeed15W100Filled.displayName = 'AmauiIconMaterialSpeed15W100Filled';

export default IconMaterialSpeed15W100Filled;
