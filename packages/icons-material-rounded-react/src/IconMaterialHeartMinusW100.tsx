import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartMinusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartMinusW100'

      short_name='HeartMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-426q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H600Zm-160-75ZM92-634q0-71 48.5-119.5T260-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q67 0 118 47t51 119q0 16-3.5 33.5T776-568q-2 6-7.5 8t-10.5.5q-5-1.5-8-6.45T749-579q5-15.53 7.5-29.76Q759-623 759-636q0-69-47-103.5T620-774q-51 0-91.5 31T459-668q-3.21 5.33-8.33 7.67-5.13 2.33-10.9 2.33-5.77 0-10.72-2.67-4.95-2.66-8.05-7.33-29-44-69.5-75T260-774q-59 0-99.5 39.78Q120-694.43 120-634q0 33.87 14 68.76 14 34.9 50 80.57Q220-439 282-377.5T440-228l102-95q5-4 10.58-3.62 5.58.39 9.42 4.62 5 5 4.5 10.5T561-302l-99 92q-5 5-10.75 6.5t-11.5 1.5q-5.75 0-11.25-1.5T418-210q-97-89-160.5-152t-100-110.5Q121-520 106.5-558T92-634Z"/>
    </Icon>
  );
});

IconMaterialHeartMinusW100.displayName = 'OnesyIconMaterialHeartMinusW100';

export default IconMaterialHeartMinusW100;
