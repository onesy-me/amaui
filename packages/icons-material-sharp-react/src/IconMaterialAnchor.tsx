import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnchor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Anchor'

      short_name='Anchor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-61 0-125-22t-116-60q-52-38-85.5-89T120-360v-120l160 120-62 62q29 51 92 88t130 47v-357H320v-80h120v-47q-35-13-57.5-43.5T360-760q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 69.5T520-647v47h120v80H520v357q67-10 130-47t92-88l-62-62 160-120v120q0 58-33.5 109T721-162q-52 38-116 60T480-80Zm0-640q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialAnchor.displayName = 'OnesyIconMaterialAnchor';

export default IconMaterialAnchor;
