import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCycloneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CycloneFilled'

      short_name='Cyclone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Zm0-2q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm4.525 8q.45-1.4.675-2.5.225-1.1.35-1.75-1.075 1.05-2.5 1.65-1.425.6-3.05.6-3.4 0-5.963-.462Q3.475 19.075 2 18.65v-2.125q1.4.45 2.5.675 1.1.225 1.75.35-1.05-1.075-1.65-2.5Q4 13.625 4 12q0-3.425.463-5.975.462-2.55.887-4.025h2.125q-.45 1.4-.687 2.5-.238 1.1-.338 1.75Q7.525 5.2 8.95 4.6 10.375 4 12 4q3.425 0 5.975.463 2.55.462 4.025.887v2.125q-1.4-.45-2.5-.688-1.1-.237-1.75-.337 1.05 1.075 1.65 2.5.6 1.425.6 3.05 0 3.425-.462 5.975-.463 2.55-.888 4.025ZM12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Z"/>
    </Icon>
  );
});

IconMaterialCycloneFilled.displayName = 'AmauiIconMaterialCycloneFilled';

export default IconMaterialCycloneFilled;
