import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestFoundSavingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavingsW100'

      short_name='NestFoundSavings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-212H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H578l-77 77q-9 9-21 9t-21-9l-77-77Zm-150-28h162l86 86 86-86h162q14 0 23-9t9-23v-496q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm248-280Zm0 174q75 0 124.5-52.5T654-520v-144q0-13-8.5-21.5T624-694H480q-70 0-122 49.5T306-520q0 26 10 54t29 57l-31 30q-5 5-5 10t5 10q5 5 10 4.5t10-5.5l31-28q25 20 56 31t59 11Zm0-28q-25 0-50.5-9.5T386-410l126-126q5-5 5-10.5t-5-10.5q-5-5-10-5t-10 5L365-430q-11-18-21-43t-10-47q0-63 43.5-104.5T480-666h146v146q0 60-43 103t-103 43Zm-36-115Z"/>
    </Icon>
  );
});

IconMaterialNestFoundSavingsW100.displayName = 'OnesyIconMaterialNestFoundSavingsW100';

export default IconMaterialNestFoundSavingsW100;
