import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlagCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagCircleW100'

      short_name='FlagCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 17.6q.15 0 .25-.1t.1-.25V12.6h3.15l.8 1.575q.1.2.275.313.175.112.375.112h3.15q.325 0 .538-.213.212-.212.212-.537v-3.7q0-.325-.212-.538-.213-.212-.538-.212h-2.1l-.8-1.575q-.1-.2-.275-.313Q13.5 7.4 13.3 7.4H9.15q-.325 0-.537.212-.213.213-.213.538v9.1q0 .15.1.25t.25.1Zm4.925-3.7-1-2H9.1V8.1h4.225l1 2H16.9v3.8ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialFlagCircleW100.displayName = 'AmauiIconMaterialFlagCircleW100';

export default IconMaterialFlagCircleW100;
