import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer5W100'

      short_name='Timer5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M536-302q11.55 0 19.78-8.52Q564-319.04 564-331v-95q0-11-8.5-19.5T536-454H424v-96h126q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H426.16q-13.16 0-21.66 8.62-8.5 8.63-8.5 21.38v92q0 12.75 8.63 21.37Q413.25-426 426-426h110v96H410q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h126Zm-56 142q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Zm-86-426q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h172q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H394Zm86 734q-63.53 0-119.77-24Q304-180 262-222q-42-42-66-98.23-24-56.24-24-119.77 0-63.53 24-119.77Q220-616 262-658q42-42 98.23-66 56.24-24 119.77-24 57 0 110.5 21t97.5 59l30-30q4-4 9.5-4.5T738-698q5 5 5 10t-5 10l-30 30q38 44 59 97.5T788-440q0 63.53-24 119.77Q740-264 698-222q-42 42-98.23 66-56.24 24-119.77 24Z"/>
    </Icon>
  );
});

IconMaterialTimer5W100.displayName = 'OnesyIconMaterialTimer5W100';

export default IconMaterialTimer5W100;
