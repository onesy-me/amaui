import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConfirmationNumberW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberW100Filled'

      short_name='ConfirmationNumber'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-69q0-8 3.5-15t10.5-11q30-19 48-48.04 18-29.05 18-65Q212-516 194-545q-18-29-48-48-7-4-10.5-11t-3.5-15v-69q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v69q0 8-3.5 15T814-593q-30 19-48 48.04-18 29.05-18 65Q748-444 766-415q18 29 48 48 7 4 10.5 11t3.5 15v69q0 24.75-17.62 42.37Q792.75-212 768-212H192Zm288.04-104q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Zm0-150q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Zm0-150q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberW100Filled.displayName = 'OnesyIconMaterialConfirmationNumberW100Filled';

export default IconMaterialConfirmationNumberW100Filled;
