import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyringeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyringeFilled'

      short_name='Syringe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M156 543q-11-12-11-28.5t11-28.5l112-112-43-43-12 12q-12 12-28.5 12T156 343q-11-12-11-28.5t11-27.5l80-80q12-12 28.5-12t28.5 12q12 11 12 28t-12 28l-12 12 43 43 112-112q12-12 28.5-12t28.5 12q12 12 12 28.5T493 263l-27 26 62 62-113 112q-11 12-11 28.5t11 28.5q12 12 28.5 12t28.5-12l112-113 61 60-113 113q-12 12-12 28.5t12 28.5q11 11 27.5 10.5T588 636l112-113 61 61q23 23 23 56.5T761 697l-28 29 155 154q10 10 5 22t-19 12h-41q-12 0-23.5-5T790 896L676 782l-28 29q-23 23-56.5 23T535 811L240 516l-27 27q-12 11-28.5 11T156 543Z"/>
    </Icon>
  );
});

IconMaterialSyringeFilled.displayName = 'AmauiIconMaterialSyringeFilled';

export default IconMaterialSyringeFilled;
