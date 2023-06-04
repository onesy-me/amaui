import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grain'

      short_name='Grain'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18q0-.825.588-1.413Q5.175 16 6 16t1.412.587Q8 17.175 8 18q0 .825-.588 1.413Q6.825 20 6 20Zm8 0q-.825 0-1.412-.587Q12 18.825 12 18q0-.825.588-1.413Q13.175 16 14 16t1.413.587Q16 17.175 16 18q0 .825-.587 1.413Q14.825 20 14 20Zm-4-4q-.825 0-1.412-.588Q8 14.825 8 14t.588-1.413Q9.175 12 10 12t1.413.587Q12 13.175 12 14q0 .825-.587 1.412Q10.825 16 10 16Zm8 0q-.825 0-1.413-.588Q16 14.825 16 14t.587-1.413Q17.175 12 18 12q.825 0 1.413.587Q20 13.175 20 14q0 .825-.587 1.412Q18.825 16 18 16ZM6 12q-.825 0-1.412-.588Q4 10.825 4 10t.588-1.413Q5.175 8 6 8t1.412.587Q8 9.175 8 10q0 .825-.588 1.412Q6.825 12 6 12Zm8 0q-.825 0-1.412-.588Q12 10.825 12 10t.588-1.413Q13.175 8 14 8t1.413.587Q16 9.175 16 10q0 .825-.587 1.412Q14.825 12 14 12Zm-4-4q-.825 0-1.412-.588Q8 6.825 8 6t.588-1.412Q9.175 4 10 4t1.413.588Q12 5.175 12 6t-.587 1.412Q10.825 8 10 8Zm8 0q-.825 0-1.413-.588Q16 6.825 16 6t.587-1.412Q17.175 4 18 4q.825 0 1.413.588Q20 5.175 20 6t-.587 1.412Q18.825 8 18 8Z"/>
    </Icon>
  );
});

IconMaterialGrain.displayName = 'AmauiIconMaterialGrain';

export default IconMaterialGrain;
