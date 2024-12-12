import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddAPhotoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoW100Filled'

      short_name='AddAPhoto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M773.96-680q-5.96 0-9.96-4.03-4-4.02-4-9.97v-66h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM440-300q59 0 99.5-40.5T580-440q0-59-40.5-99.5T440-580q-59 0-99.5 40.5T300-440q0 59 40.5 99.5T440-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32ZM152-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8.2-8.77 19.76-13.88Q355.32-788 368-788h198q5.95 0 9.97 4.03Q580-779.95 580-774v69q0 18.75 13.13 31.87Q606.25-660 625-660h35v35q0 18.75 13.13 31.87Q686.25-580 705-580h69q5.95 0 9.97 4.03Q788-571.95 788-566v334q0 26-17 43t-43 17H152Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoW100Filled.displayName = 'OnesyIconMaterialAddAPhotoW100Filled';

export default IconMaterialAddAPhotoW100Filled;
