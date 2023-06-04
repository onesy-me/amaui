import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaskAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskAltW100Filled'

      short_name='TaskAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.35 9.525q.175.575.263 1.2.087.625.087 1.275 0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3q1.425 0 2.688.412Q15.95 4.125 17 4.875q.125.1.15.237.025.138-.1.263-.1.125-.262.125-.163 0-.288-.1-.95-.675-2.087-1.038Q13.275 4 12 4 8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-.6-.087-1.175-.088-.575-.263-1.125-.025-.075 0-.175.025-.1.075-.15.175-.2.363-.15.187.05.262.3Zm-10.325 5.65-2.6-2.6q-.1-.1-.087-.238.012-.137.112-.237.125-.125.25-.125t.25.125l2.6 2.6 9.425-9.425q.1-.1.238-.087.137.012.237.112.125.125.125.25t-.125.25l-9.375 9.375q-.225.225-.525.225-.3 0-.525-.225Z"/>
    </Icon>
  );
});

IconMaterialTaskAltW100Filled.displayName = 'AmauiIconMaterialTaskAltW100Filled';

export default IconMaterialTaskAltW100Filled;
