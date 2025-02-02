import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3W100Filled'

      short_name='Person3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-432q-29 0-48.5-20.5T332-500q0-29 14-40t14-34q0-12-4-23t-4-23q0-22 12-39.5t41-29.5q14-13 29-26t46-13q33 0 47 14t28 25q29 12 41 29.5t12 39.5q0 12-4 23t-4 23q0 23 14 34t14 40q0 27-19.5 47.5T560-432H400ZM212-182v-22q0-22 13.5-41.5T262-276q55-26 109.5-39T480-328q54 0 108.5 13T698-276q23 11 36.5 30.5T748-204v22q0 13-8.5 21.5T718-152H242q-13 0-21.5-8.5T212-182Z"/>
    </Icon>
  );
});

IconMaterialPerson3W100Filled.displayName = 'OnesyIconMaterialPerson3W100Filled';

export default IconMaterialPerson3W100Filled;
