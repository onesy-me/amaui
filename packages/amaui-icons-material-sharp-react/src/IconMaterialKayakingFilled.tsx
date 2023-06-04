import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKayakingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KayakingFilled'

      short_name='Kayaking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 23v-2h1q.8 0 1.55-.25T6 20q.7.5 1.45.75T9 21q.8 0 1.562-.25.763-.25 1.438-.75.7.5 1.45.75T15 21q.8 0 1.562-.25.763-.25 1.438-.75.675.5 1.438.75Q20.2 21 21 21h1v2h-1q-.775 0-1.525-.188-.75-.187-1.475-.562-.725.375-1.475.562Q15.775 23 15 23q-.775 0-1.525-.188-.75-.187-1.475-.562-.725.375-1.475.562Q9.775 23 9 23q-.775 0-1.525-.188-.75-.187-1.475-.562-.725.375-1.475.562Q3.775 23 3 23ZM12 9.5q-.825 0-1.412-.588Q10 8.325 10 7.5t.588-1.412Q11.175 5.5 12 5.5t1.413.588Q14 6.675 14 7.5t-.587 1.412Q12.825 9.5 12 9.5ZM9 19q-.9 0-1.675-.425T6 17.5q-.425.45-.938.812-.512.363-1.137.563-1.025-.275-2.075-.65Q.8 17.85 0 17.5q1.35-.575 3.3-1.175 1.95-.6 3.825-.9l1.35-4.175q.275-.85 1.037-1.125.763-.275 1.438.075l2.55 1.3 2.825-1.5 1.65-3.7-.5-1.325L18.8 2 22 3.425 20.675 6.4l-1.325.5-3.7 8.35q2.325.275 4.662.95 2.338.675 3.688 1.3-.725.325-1.837.712-1.113.388-2.088.663-.625-.175-1.137-.538-.513-.362-.938-.837-.55.65-1.325 1.075Q15.9 19 15 19t-1.675-.425Q12.55 18.15 12 17.5q-.55.65-1.325 1.075Q9.9 19 9 19Zm5.075-3.925.95-2.125-1.525.8-1.75-.9-.7 2.15H12q.525 0 1.05.012.525.013 1.025.063Z"/>
    </Icon>
  );
});

IconMaterialKayakingFilled.displayName = 'AmauiIconMaterialKayakingFilled';

export default IconMaterialKayakingFilled;
