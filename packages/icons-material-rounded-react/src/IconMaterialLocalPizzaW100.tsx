import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPizzaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaW100'

      short_name='LocalPizza'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.78-788q72.22 0 146.72 22.5T761-702q13 9.37 19.5 22.66Q787-666.06 787-652q0 8.07-2.5 16.5T777-619L530-249q-9 13.5-22.5 20.25T479.88-222q-14.12 0-27.5-6.5T430-249L183-619q-5.38-8.25-7.69-16.5Q173-643.75 173-652q0-13.78 6.5-26.8Q186-691.81 199-701q60-41 134.28-64 74.27-23 146.5-23Zm-.21 28Q408-760 342-738t-126 59q-8 5-11.5 12t-3.5 15q0 5 1 9.5t4 8.5l247 370q5 7 12 10.5t15 3.5q8 0 15-3.5t12-10.5l247-371q3-4 4-8t1-9q0-8-3.5-15T744-679q-60-38-126-59.5T479.57-760ZM345.88-590q14.12 0 24.12-9.88 10-9.88 10-24T370.12-648q-9.88-10-24-10T322-648.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm134 204q14.12 0 24.12-9.88 10-9.88 10-24T504.12-444q-9.88-10-24-10T456-444.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm.12 136Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaW100.displayName = 'OnesyIconMaterialLocalPizzaW100';

export default IconMaterialLocalPizzaW100;
