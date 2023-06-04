import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceFilled'

      short_name='QuickReference'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M660 896h40V736h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0 280q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976ZM480 456h200L480 256l200 200-200-200v200ZM120 976V176h400l240 240v92q-20-6-40-9t-40-3q-57 0-107.5 21.5T484 576H280v80h147q-9 19-15 39t-9 41H280v80h123q7 45 28 86.5t54 73.5H120Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceFilled.displayName = 'AmauiIconMaterialQuickReferenceFilled';

export default IconMaterialQuickReferenceFilled;
