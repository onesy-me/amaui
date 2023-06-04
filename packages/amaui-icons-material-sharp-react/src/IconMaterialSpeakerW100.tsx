import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerW100'

      short_name='Speaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 20.7V3.3h11.4v17.4ZM7 20h10V4H7Zm5-11.5q.625 0 1.062-.438Q13.5 7.625 13.5 7t-.438-1.062Q12.625 5.5 12 5.5t-1.062.438Q10.5 6.375 10.5 7t.438 1.062Q11.375 8.5 12 8.5Zm0 9.8q1.375 0 2.338-.963.962-.962.962-2.337 0-1.375-.962-2.338Q13.375 11.7 12 11.7t-2.337.962Q8.7 13.625 8.7 15t.963 2.337q.962.963 2.337.963Zm0-.7q-1.075 0-1.837-.763Q9.4 16.075 9.4 15t.763-1.838Q10.925 12.4 12 12.4t1.838.762q.762.763.762 1.838 0 1.075-.762 1.837-.763.763-1.838.763ZM7 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialSpeakerW100.displayName = 'AmauiIconMaterialSpeakerW100';

export default IconMaterialSpeakerW100;
