import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkeletonRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkeletonRoundedW100Filled'
      short_name='Skeleton'

      {...props}
    >
      <path d="M12 20.7q-.925 0-1.612-.188-.688-.187-1.538-.737L6.125 18.05q-.425-.275-.625-.762-.2-.488-.2-.938 0-1.075.788-1.688.787-.612 1.712-.612.5 0 .975.15t.825.475q.425.4.95.625.525.225 1.1.275v-3.05q-1.225-.025-2.338-.238Q8.2 12.075 7.35 11.7q-.85-.375-1.35-.925-.5-.55-.5-1.25 0-.5.35-.925.35-.425.975-.8-.15-.225-.237-.5-.088-.275-.088-.575 0-.55.412-1.025.413-.475 1.138-.85Q8 4.725 8 4.625V4.4q0-.65.688-1.138.687-.487 1.812-.762v.7q-1.05.275-1.425.637Q8.7 4.2 8.7 4.4q0 .875 1.138 1.137 1.137.263 1.812.313V2h.7v3.85q.8-.025 1.875-.288Q15.3 5.3 15.3 4.4q0-.2-.375-.55-.375-.35-1.4-.625V2.5q1.125.275 1.8.775T16 4.4q0 .05-.05.45.725.375 1.137.85.413.475.413 1.025 0 .3-.075.562-.075.263-.225.488.625.375.963.812.337.438.337.938 0 .7-.5 1.25t-1.35.925q-.85.375-1.962.587-1.113.213-2.338.238v3.05q.575-.05 1.1-.275.525-.225.95-.625.35-.325.825-.475.475-.15.975-.15.925 0 1.713.625.787.625.787 1.7 0 .45-.2.925-.2.475-.625.75l-2.725 1.725q-.85.55-1.537.737-.688.188-1.613.188Zm-.35-8.875v-2.3q-1.325-.05-2.487-.325Q8 8.925 7.275 8.325q-.65.35-.863.675-.212.325-.212.525 0 .95 1.587 1.6 1.588.65 3.863.7ZM8.25 17.4q.3 0 .525-.225Q9 16.95 9 16.65q0-.3-.225-.525-.225-.225-.525-.225-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Zm3.4-8.575V6.55q-1-.05-1.888-.288-.887-.237-1.362-.787-.675.35-.937.675-.263.325-.263.575 0 1.05 1.4 1.55t3.05.55Zm.7 3q2.275-.05 3.862-.7 1.588-.65 1.588-1.6 0-.2-.225-.525t-.875-.675q-.725.575-1.875.863-1.15.287-2.475.337Zm0-3q1.65-.05 3.05-.55t1.4-1.55q0-.25-.262-.575-.263-.325-.938-.675-.475.55-1.362.787-.888.238-1.888.288Zm3.4 8.575q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525-.225-.225-.525-.225-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Z"/>
    </Icon>
  );
});

export default IconMaterialSkeletonRoundedW100Filled;
