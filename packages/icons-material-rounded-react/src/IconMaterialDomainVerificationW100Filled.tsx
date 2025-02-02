import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainVerificationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationW100Filled'

      short_name='DomainVerification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-376-76-76q-5-5-10-5t-10 5q-5 5-4.5 10.5t4.5 9.5l75 75q9 9 21 9t21-9l159-159q5-5 5-10t-5-10q-5-5-10.5-4.5T598-536L438-376ZM160-640h640v-48q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v48Zm32 428q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationW100Filled.displayName = 'OnesyIconMaterialDomainVerificationW100Filled';

export default IconMaterialDomainVerificationW100Filled;
