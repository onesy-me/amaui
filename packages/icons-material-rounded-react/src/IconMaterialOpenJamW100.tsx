import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenJamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenJamW100'

      short_name='OpenJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-212H306q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h348q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-358l80 80q4 4 9.5 4.5T594-490q5-5 5-10t-5-10l-93-93q-9-9-21-9t-21 9l-93 93q-4 4-4.5 9.5T366-490q5 5 10 5t10-5l80-80v358Zm14-274ZM192-372q-26 0-43-17t-17-43v-296q0-26 17-43t43-17h576q26 0 43 17t17 43v296q0 26-17 43t-43 17H614q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h154q12 0 22-10t10-22v-296q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v296q0 12 10 22t22 10h154q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H192Z"/>
    </Icon>
  );
});

IconMaterialOpenJamW100.displayName = 'OnesyIconMaterialOpenJamW100';

export default IconMaterialOpenJamW100;
