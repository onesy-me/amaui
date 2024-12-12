import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEuroW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroW100Filled'

      short_name='Euro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M602-172q-115 0-194.5-63.5T298-396H172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h121q-5-23-4.5-55.5T293-536H172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h128q29-97 108-160.5T602-788q52.66 0 100.33 15.5T791-729q5.25 3.26 5.63 8.63.37 5.37-3.97 9.49-4.35 4.5-10.5 4.69Q776-706 771-710q-36.69-23.86-79.5-36.93Q648.7-760 602-760q-104 0-174.5 57T329-564h253q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H322q-5 23-5 56t5 56h260q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H328q29 82 99.5 139T602-200q46.94 0 89.97-13T771-250q5-4 11-4t11 5q4 4 3.63 9.37-.38 5.37-5.63 8.63-41 28-88.67 43.5T602-172Z"/>
    </Icon>
  );
});

IconMaterialEuroW100Filled.displayName = 'OnesyIconMaterialEuroW100Filled';

export default IconMaterialEuroW100Filled;
