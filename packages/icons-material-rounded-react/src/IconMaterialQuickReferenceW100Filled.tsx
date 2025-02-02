import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReferenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceW100Filled'

      short_name='QuickReference'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M644-212q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-80q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v80q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm0-139q6 1 10-3.5t4-10.5q0-6-4.29-10-4.28-4-10-4-5.71 0-9.71 4.07-4 4.07-4 9.5t4.2 9.93q4.2 4.5 9.8 4.5Zm0 203q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-82.4-504H680L532-800l148 148-148-148v118.4q0 12.58 8.51 21.09T561.6-652ZM232-132q-24.75 0-42.37-17.63Q172-167.25 172-192v-576q0-24.75 17.63-42.38Q207.25-828 232-828h289q12.44 0 23.72 5T564-810l126 126q8 8 13 19.28 5 11.28 5 23.72v71q0 13.08-10 21.54-10 8.46-23 6.46-8-1-15.67-1.5-7.66-.5-15.33-.5-58 0-107.5 24T453-454H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h113q-17 29-27 62.5T396-294h-76q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h78q3 26 11.5 49.5T431-170q8 13 1.44 25.5Q425.89-132 412-132H232Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceW100Filled.displayName = 'OnesyIconMaterialQuickReferenceW100Filled';

export default IconMaterialQuickReferenceW100Filled;
