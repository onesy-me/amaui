import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartPlusFilled'

      short_name='HeartPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-280v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM440-120 313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 21.5t81 61.5q34-40 81-61.5t99-21.5q85 0 142.5 51.5T834-668q-18-7-36-10.5t-35-3.5q-101 0-172 70.5T520-440q0 52 21 98.5t59 79.5q-19 17-49.5 43.5T498-172l-58 52Z"/>
    </Icon>
  );
});

IconMaterialHeartPlusFilled.displayName = 'OnesyIconMaterialHeartPlusFilled';

export default IconMaterialHeartPlusFilled;
