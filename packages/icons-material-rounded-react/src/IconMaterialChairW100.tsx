import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairW100'

      short_name='Chair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M201.96-206q-5.96 0-9.96-4.02-4-4.03-4-9.98v-40h-28q-29 0-48.5-19.5T92-328v-200q0-35 22.5-51.5T160-596v-60q0-29 19.5-48.5T228-724h504q29 0 48.5 19.5T800-656v60q27 0 47.5 18t20.5 50v200q0 29-19.5 48.5T800-260h-28v40q0 5.95-3 9.98-3 4.02-8.96 4.02-5.97 0-10-4.02Q746-214.05 746-220v-40H216v40q0 6-4.04 10-4.03 4-10 4ZM160-288h640q17 0 28.5-11.5T840-328v-200q0-17-11.5-28.5T800-568q-17 0-28.5 11.5T760-528v134H200v-134q0-17-11.5-28.5T160-568q-17 0-28.5 11.5T120-528v200q0 17 11.5 28.5T160-288Zm68-134h504v-106q0-20 11-37t29-25v-66q0-17-11.5-28.5T732-696H228q-17 0-28.5 11.5T188-656v66q18 8 29 25t11 37v106Zm252 0Zm0 134Zm0-106Z"/>
    </Icon>
  );
});

IconMaterialChairW100.displayName = 'OnesyIconMaterialChairW100';

export default IconMaterialChairW100;
