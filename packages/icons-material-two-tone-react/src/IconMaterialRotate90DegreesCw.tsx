import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCw = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCw'

      short_name='Rotate90DegreesCw'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M4.64,19.37c3.03,3.03,7.67,3.44,11.15,1.25l-1.46-1.46c-2.66,1.43-6.04,1.03-8.28-1.21c-2.73-2.73-2.73-7.17,0-9.9 C7.42,6.69,9.21,6.03,11,6.03V9l4-4l-4-4v3.01c-2.3,0-4.61,0.87-6.36,2.63C1.12,10.15,1.12,15.85,4.64,19.37z M11,13l6,6l6-6 l-6-6L11,13z M17,16.17L13.83,13L17,9.83L20.17,13L17,16.17z"/><rect enableBackground="new" height="4.49" opacity=".3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.2138 15.8229)" width="4.49" x="14.75" y="10.75"/></g></g></g>
    </Icon>
  );
});

IconMaterialRotate90DegreesCw.displayName = 'OnesyIconMaterialRotate90DegreesCw';

export default IconMaterialRotate90DegreesCw;
