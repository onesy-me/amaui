import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHvacW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HvacW100Filled'

      short_name='Hvac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.825q2 0 3.412-1.413Q16.825 14 16.825 12t-1.413-3.412Q14 7.175 12 7.175T8.588 8.588Q7.175 10 7.175 12t1.413 3.412Q10 16.825 12 16.825Zm0-.675q-.8 0-1.575-.325-.775-.325-1.45-.975h6.05q-.675.65-1.45.975-.775.325-1.575.325Zm-3.55-2q-.2-.4-.362-.85-.163-.45-.213-.95h8.25q-.05.5-.2.95-.15.45-.4.85Zm-.575-2.5q.05-.5.2-.95.15-.45.4-.85h7.075q.2.4.362.85.163.45.213.95Zm1.1-2.5q.675-.65 1.45-.975Q11.2 7.85 12 7.85q.8 0 1.575.325.775.325 1.45.975ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialHvacW100Filled.displayName = 'AmauiIconMaterialHvacW100Filled';

export default IconMaterialHvacW100Filled;
