import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolcanoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoW100Filled'

      short_name='Volcano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M732-132H252q-32 0-50-27t-4-57l60-136q8-17 22.55-26.5T313-388h82l65-162q7-17 22.08-27.5Q497.15-588 516-588h120.41Q656-588 672-576q16 12 21 32l96 336q8 29-9.73 52.5Q761.55-132 732-132ZM566-760v-80q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v80q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Zm145 49 58-57q3.75-4 9.38-4 5.62 0 10.12 4 4.5 4.36 4.5 10.18 0 5.82-5 9.82l-58 57q-4 4-9.5 3.5t-9.67-4.5q-3.83-3.67-3.83-9.33 0-5.67 4-9.67Zm-281 19-58-57q-4-3.75-4-9.38 0-5.62 4-10.12 4.36-4.5 10.18-4.5 5.82 0 9.82 5l57 58q4 4 4 9t-4 9.17q-3.67 3.83-9.33 3.83-5.67 0-9.67-4Z"/>
    </Icon>
  );
});

IconMaterialVolcanoW100Filled.displayName = 'OnesyIconMaterialVolcanoW100Filled';

export default IconMaterialVolcanoW100Filled;
