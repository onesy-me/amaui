import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDvrW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrW100Filled'

      short_name='Dvr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 9.35H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 4H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM7 9.5q.225 0 .363-.15Q7.5 9.2 7.5 9q0-.225-.137-.363Q7.225 8.5 7 8.5q-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 4q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363Q7.225 12.5 7 12.5q-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm3.05 6.2q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v10.4q0 .625-.437 1.062-.438.438-1.063.438h-4.5v1.25q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialDvrW100Filled.displayName = 'AmauiIconMaterialDvrW100Filled';

export default IconMaterialDvrW100Filled;
