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
      <path d="M680 896q11 0 18.5-7.5T706 870q0-11-7.5-18.5T680 844q-11 0-18.5 7.5T654 870q0 11 7.5 18.5T680 896Zm0-240q-19 0-35 9.5T619 691q-4 6-1 12.5t10 9.5q6 3 12 0t11-8q5-7 12.5-11t16.5-4q13 0 22.5 8.5T712 720q0 11-6 18.5T692 754q-6 6-12.5 12T668 780q-3 6-4.5 12.5T662 806q0 9 5 16.5t13 7.5q8 0 13-6t5-14q0-11 6-19.5t14-16.5q12-11 21-24.5t9-29.5q0-27-20-45.5T680 656Zm0 320q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976ZM520 456h160L480 256l200 200-200-200v160q0 17 11.5 28.5T520 456ZM200 976q-33 0-56.5-23.5T120 896V256q0-33 23.5-56.5T200 176h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v59q-20-6-40-9t-40-3q-57 0-107.5 21.5T484 576H320q-17 0-28.5 11.5T280 616q0 17 11.5 28.5T320 656h107q-9 19-15 39t-9 41h-83q-17 0-28.5 11.5T280 776q0 17 11.5 28.5T320 816h83q7 45 28 86.5t54 73.5H200Z"/>
    </Icon>
  );
});

IconMaterialUnknownDocumentFilled.displayName = 'AmauiIconMaterialUnknownDocumentFilled';

export default IconMaterialUnknownDocumentFilled;
