import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricCar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricCar'

      short_name='ElectricCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360v20q0 25-17.5 42.5T180-280q-25 0-42.5-17.5T120-340v-286q0-7 1-14t3-13l75-213q8-24 29-39t47-15h410q26 0 47 15t29 39l75 213q2 6 3 13t1 14v286q0 25-17.5 42.5T780-280q-25 0-42.5-17.5T720-340v-20H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-540q0-25-17.5-42.5T300-600q-25 0-42.5 17.5T240-540q0 25 17.5 42.5T300-480Zm360 0q25 0 42.5-17.5T720-540q0-25-17.5-42.5T660-600q-25 0-42.5 17.5T600-540q0 25 17.5 42.5T660-480ZM520-120v48q0 11-9.5 17T491-54l-173-87q-7-4-5.5-11.5t9.5-7.5h118v-48q0-11 9.5-17t19.5-1l173 87q7 4 5.5 11.5T638-120H520ZM200-440h560v-200H200v200Z"/>
    </Icon>
  );
});

IconMaterialElectricCar.displayName = 'OnesyIconMaterialElectricCar';

export default IconMaterialElectricCar;
