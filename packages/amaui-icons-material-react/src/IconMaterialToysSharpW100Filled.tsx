import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToysSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysSharpW100Filled'
      short_name='Toys'

      {...props}
    >
      <path d="M7 19.35Q5.95 19.35 5.263 18.562Q4.575 17.775 4.65 16.7H3V11.05H5.55L3.35 8.85L2.35 9.85L1.85 9.35L4.35 6.85L4.85 7.35L3.85 8.35L6.1 10.6L7.55 6.3H16.325L17.95 11H21V16.7H19.35Q19.425 17.775 18.738 18.562Q18.05 19.35 17 19.35Q16.025 19.35 15.338 18.663Q14.65 17.975 14.65 17H9.35Q9.35 17.975 8.662 18.663Q7.975 19.35 7 19.35ZM6.7 11H11.6V7H8.025ZM12.3 11H17.2L15.875 7H12.3ZM7 18.65Q7.675 18.65 8.163 18.163Q8.65 17.675 8.65 17Q8.65 16.325 8.163 15.837Q7.675 15.35 7 15.35Q6.325 15.35 5.838 15.837Q5.35 16.325 5.35 17Q5.35 17.675 5.838 18.163Q6.325 18.65 7 18.65ZM17 18.65Q17.675 18.65 18.163 18.163Q18.65 17.675 18.65 17Q18.65 16.325 18.163 15.837Q17.675 15.35 17 15.35Q16.325 15.35 15.838 15.837Q15.35 16.325 15.35 17Q15.35 17.675 15.838 18.163Q16.325 18.65 17 18.65Z"/>
    </Icon>
  );
});

IconMaterialToysSharpW100Filled.displayName = 'AmauiIconMaterialToysSharpW100Filled';

export default IconMaterialToysSharpW100Filled;
