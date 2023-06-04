import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCookieFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieFilled'

      short_name='Cookie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 10q.625 0 1.062-.438Q12 9.125 12 8.5t-.438-1.062Q11.125 7 10.5 7t-1.062.438Q9 7.875 9 8.5t.438 1.062Q9.875 10 10.5 10Zm-2 5q.625 0 1.062-.438Q10 14.125 10 13.5t-.438-1.062Q9.125 12 8.5 12t-1.062.438Q7 12.875 7 13.5t.438 1.062Q7.875 15 8.5 15Zm6.5 1q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14t-.712.287Q14 14.575 14 15t.288.712Q14.575 16 15 16Zm-3 6q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-2.025.838-3.938Q3.675 6.15 5.163 4.7 6.65 3.25 8.7 2.5q2.05-.75 4.5-.45.375.05.575.312.2.263.225.713.05 1.6 1.188 2.737Q16.325 6.95 17.9 7q.525.025.8.3.275.275.3.85.05 1.05.638 1.725.587.675 1.637 1.025.35.125.537.362.188.238.188.588.05 2.075-.725 3.925-.775 1.85-2.125 3.237-1.35 1.388-3.2 2.188-1.85.8-3.95.8Z"/>
    </Icon>
  );
});

IconMaterialCookieFilled.displayName = 'AmauiIconMaterialCookieFilled';

export default IconMaterialCookieFilled;
