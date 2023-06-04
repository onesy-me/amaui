import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmendW100Filled'

      short_name='Amend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.35 14.7h9.3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-9.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm.85-3.4q.725-.925 1.675-1.562Q10.825 9.1 12 9.1q1.275 0 2.338.712 1.062.713 1.612 1.888.075.15.213.212.137.063.262-.012.125-.1.162-.275.038-.175-.037-.325-.625-1.35-1.85-2.125Q13.475 8.4 12 8.4q-1.3 0-2.4.675-1.1.675-1.9 1.725V9.15q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.275q0 .225.175.4.175.175.4.175H9.85q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1Zm3.8 9.4q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialAmendW100Filled.displayName = 'AmauiIconMaterialAmendW100Filled';

export default IconMaterialAmendW100Filled;
