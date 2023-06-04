import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSegmentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentW100Filled'

      short_name='Segment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 17.35v-.7h10.7v.7Zm0-5v-.7h10.7v.7Zm-6-5v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialSegmentW100Filled.displayName = 'AmauiIconMaterialSegmentW100Filled';

export default IconMaterialSegmentW100Filled;
