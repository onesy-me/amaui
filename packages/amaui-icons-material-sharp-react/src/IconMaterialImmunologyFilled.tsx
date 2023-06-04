import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImmunologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImmunologyFilled'

      short_name='Immunology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M521 976q-30 0-69.5-4T371 959q-41-9-79-23t-65-34q-30-23-63-72t-60.5-107Q76 665 58 607t-18-99q0-42 16-76t42-62.5q26-28.5 58.5-52T222 273q60-39 133-68t151-29q78 0 141.5 30T774 279q15 10 39 30t47.5 50q23.5 30 41 70.5T920 522q2 74-30.5 154.5t-88 147Q746 890 673 933t-152 43ZM414 816q54 0 89-38t35-86q0-22-9-43.5T500 609q-22-20-36-44t-21-53q-10-44-43.5-70T324 416q-49 0-86.5 37.5T200 540q0 39 16.5 87t45.5 90q29 42 68 70.5t84 28.5Zm0-80q-27 0-51-22.5T320.5 660Q302 629 291 595.5T280 540q0-17 13.5-30.5T324 496q12 0 24.5 8.5T366 530q11 42 29.5 75.5T446 668q6 5 9 12t3 14q0 16-12 29t-32 13Zm236-120q17 0 28.5-11.5T690 576v-10l10 5q15 8 30.5 3.5T754 556q9-14 5-30.5T740 501l-10-5 10-5q15-8 18.5-24t-4.5-31q-8-14-23.5-18t-30.5 4l-10 5v-11q0-17-11.5-28.5T650 376q-17 0-28.5 11.5T610 416v11l-9-5q-14-8-30-3.5T546 437q-8 14-4.5 31t19.5 24l9 4-9 6q-14 9-18.5 24.5T546 556q8 15 24.5 19t30.5-4l9-5v10q0 17 11.5 28.5T650 616Z"/>
    </Icon>
  );
});

IconMaterialImmunologyFilled.displayName = 'AmauiIconMaterialImmunologyFilled';

export default IconMaterialImmunologyFilled;
