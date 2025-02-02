import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPostOfficeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeW100'

      short_name='LocalPostOffice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-132q-11 0-19.5-8.5T132-160v-240q0-11 8.5-19.5T160-428h132v-212q0-78.33 54.83-133.17Q401.67-828 480-828h160q78.33 0 133.17 54.83Q828-718.33 828-640v494q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H588v92q0 11-8.5 19.5T560-132H160Zm428-148h212v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v212h240q11 0 19.5 8.5T588-400v120Zm-244-15q8 5 16 5t16-5l184-105H160l184 105ZM160-160h400v-208l-170 97q-6.71 3.64-14.16 5.82T360.2-263q-8.2 0-15.79-2.18-7.58-2.18-14.41-5.82l-170-97v208Zm0-240v11.92-.46V-364v-4 208-208 4-24.61.46V-400Zm280-186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H440Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeW100.displayName = 'OnesyIconMaterialLocalPostOfficeW100';

export default IconMaterialLocalPostOfficeW100;
