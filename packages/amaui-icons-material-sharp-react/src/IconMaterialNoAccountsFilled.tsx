import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoAccountsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAccountsFilled'

      short_name='NoAccounts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.2 10.95 10.55 6.3q.35-.15.712-.225Q11.625 6 12 6q1.475 0 2.488 1.012Q15.5 8.025 15.5 9.5q0 .375-.075.738-.075.362-.225.712ZM5.85 17.1q1.275-.975 2.85-1.538Q10.275 15 12 15q.45 0 .863.037.412.038.862.113l-2.2-2.2q-1.175-.15-2.012-.988-.838-.837-.988-2.012L5.675 7.1q-.8 1.025-1.237 2.263Q4 10.6 4 12q0 1.475.488 2.775.487 1.3 1.362 2.325Zm12.45-.2q.8-1.025 1.25-2.263Q20 13.4 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.4 0-2.637.45Q8.125 4.9 7.1 5.7ZM12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNoAccountsFilled.displayName = 'AmauiIconMaterialNoAccountsFilled';

export default IconMaterialNoAccountsFilled;
