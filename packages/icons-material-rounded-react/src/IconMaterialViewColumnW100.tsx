import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewColumnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnW100'

      short_name='ViewColumn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-312v-336q0-24.75 17.63-42.38Q207.25-708 232-708h496q24.75 0 42.38 17.62Q788-672.75 788-648v336q0 24.75-17.62 42.37Q752.75-252 728-252H232q-24.75 0-42.37-17.63Q172-287.25 172-312Zm60 32h136v-400H232q-12 0-22 10t-10 22v336q0 12 10 22t22 10Zm164 0h168v-400H396v400Zm196 0h136q12 0 22-10t10-22v-336q0-12-10-22t-22-10H592v400Z"/>
    </Icon>
  );
});

IconMaterialViewColumnW100.displayName = 'OnesyIconMaterialViewColumnW100';

export default IconMaterialViewColumnW100;
