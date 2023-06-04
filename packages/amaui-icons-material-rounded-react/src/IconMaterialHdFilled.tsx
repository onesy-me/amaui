import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdFilled'

      short_name='Hd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.75 15q.325 0 .537-.213.213-.212.213-.537V13h2v1.25q0 .325.213.537.212.213.537.213.325 0 .538-.213.212-.212.212-.537v-4.5q0-.325-.212-.538Q10.575 9 10.25 9q-.325 0-.537.212-.213.213-.213.538v1.75h-2V9.75q0-.325-.213-.538Q7.075 9 6.75 9q-.325 0-.537.212Q6 9.425 6 9.75v4.5q0 .325.213.537.212.213.537.213Zm6.75 0H17q.425 0 .712-.288Q18 14.425 18 14v-4q0-.425-.288-.713Q17.425 9 17 9h-3.5q-.2 0-.35.15-.15.15-.15.35v5q0 .2.15.35.15.15.35.15Zm1-1.5v-3h2v3ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialHdFilled.displayName = 'AmauiIconMaterialHdFilled';

export default IconMaterialHdFilled;
