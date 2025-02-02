import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachEmailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailW100'

      short_name='AttachEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M145-292q-24.75 0-42.37-17.63Q85-327.25 85-352v-416q0-24.75 17.63-42.38Q120.25-828 145-828h576q24.75 0 42.38 17.62Q781-792.75 781-768v174q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-184L450-577q-4 2-8 3.5t-9 1.5q-5 0-9-1.5t-8-3.5L113-778v426q0 14 9 23t23 9h392q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H145Zm288-308 304-200H129l304 200ZM113-778v8-30 7-.5 23.5-8 458-458Zm640 644q-51 0-86.5-35.5T631-256v-180q0-28.56 19.72-48.28Q670.44-504 699-504q28.56 0 48.28 19.72Q767-464.56 767-436v166q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-166q0-17-11.5-28.5T699-476q-17 0-28.5 11.5T659-436v180q0 38.77 27.66 66.39Q714.32-162 753.16-162t66.34-27.61Q847-217.23 847-256v-146q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v146q0 51-35.5 86.5T753-134Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailW100.displayName = 'OnesyIconMaterialAttachEmailW100';

export default IconMaterialAttachEmailW100;
