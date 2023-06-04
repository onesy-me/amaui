import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownDocumentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownDocumentFilled'

      short_name='UnknownDocument'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 896q11 0 18.5-7.5T706 870q0-11-7.5-18.5T680 844q-11 0-18.5 7.5T654 870q0 11 7.5 18.5T680 896Zm-18-76h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T680 656q-23 0-41.5 13.5T612 706l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T712 720q0 11-6 18.5T692 754q-6 6-12.5 12T668 780q-3 6-4.5 12t-1.5 14v14Zm18 156q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976ZM480 456h200L480 256l200 200-200-200v200ZM120 976V176h400l240 240v92q-20-6-40-9t-40-3q-57 0-107.5 21.5T484 576H280v80h147q-9 19-15 39t-9 41H280v80h123q7 45 28 86.5t54 73.5H120Z"/>
    </Icon>
  );
});

IconMaterialUnknownDocumentFilled.displayName = 'AmauiIconMaterialUnknownDocumentFilled';

export default IconMaterialUnknownDocumentFilled;
