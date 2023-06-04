import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackChangesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackChangesW100Filled'

      short_name='TrackChanges'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3h.35v8.1q.2.125.275.275.075.15.075.325 0 .275-.212.487-.213.213-.488.213t-.487-.213Q11.3 12.275 11.3 12q0-.175.075-.325.075-.15.275-.275V8.025q-1.55.125-2.6 1.262Q8 10.425 8 12q0 1.65 1.175 2.825Q10.35 16 12 16q1.65 0 2.825-1.175Q16 13.65 16 12q0-.9-.363-1.663-.362-.762-.987-1.337l.5-.5q.725.65 1.138 1.55.412.9.412 1.95 0 1.95-1.375 3.325Q13.95 16.7 12 16.7q-1.95 0-3.325-1.375Q7.3 13.95 7.3 12q0-1.875 1.262-3.213Q9.825 7.45 11.65 7.325V4q-3.2.125-5.425 2.438Q4 8.75 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-1.725-.675-3.225t-1.85-2.6l.5-.5q1.275 1.2 2 2.825.725 1.625.725 3.5 0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialTrackChangesW100Filled.displayName = 'AmauiIconMaterialTrackChangesW100Filled';

export default IconMaterialTrackChangesW100Filled;
