import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCongenitalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CongenitalFilled'

      short_name='Congenital'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M392 856q-100 0-185.5-51T74 665l-25-46q-11-22-8.5-46T59 530l201-245q9-11 21-18t26-9q14-2 27-.5t26 8.5l120 64 98-54q17-10 36-7t33 17q14 13 17.5 31.5T660 353L536 642q-11 26-36 39t-54 7l-304-65q36 71 103.5 112T392 776h179q55 0 106-21t90-59h-34q-37 0-60.5-28T654 604l27-178q3-19 15-31t28-17q16-5 32.5-.5T786 396l114 134q15 18 18.5 41.5T912 616l-15 32q-45 95-132.5 151.5T571 856H392Z"/>
    </Icon>
  );
});

IconMaterialCongenitalFilled.displayName = 'AmauiIconMaterialCongenitalFilled';

export default IconMaterialCongenitalFilled;
