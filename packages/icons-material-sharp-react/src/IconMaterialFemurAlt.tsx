import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFemurAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurAlt'

      short_name='FemurAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-440q17 0 28.5-11.5T580-480q0-7-1.5-12.5T574-503q11-4 18.5-14t7.5-23q0-17-11.5-28.5T560-580q-13 0-23 7t-14 19l-146-70q2-4 2.5-8t.5-8q0-17-11.5-28.5T340-680q-17 0-28.5 11.5T300-640q0 6 2 11.5t5 10.5q-11 4-19 14t-8 24q0 17 11.5 28.5T320-540q14 0 24-7.5t14-19.5l146 70-4 17q0 17 11.5 28.5T540-440ZM394-80q-16-47-24-92.5t-10-86q-2-40.5-.5-74.5t4.5-58q-1 0 0 0-22-5-50.5-12.5t-61-20.5Q220-437 186-455.5T119-500l50-70q39 35 81.5 55.5t78.5 32q36 11.5 60 15l24 3.5q18 1 28.5 15t7.5 32l-4.5 33.5q-4.5 33.5-5 83.5t7.5 109q8 59 33 111h-86Zm366 0h-80v-423q0-48-25.5-87T586-649L313-772l49-67 257 117q64 29 102.5 88T760-503v423Zm-280 0q-25-52-33-111t-7.5-109q.5-50 5-83.5L449-417q3-18-7.5-32T413-464l-24-3.5q-24-3.5-60-15t-78.5-32Q208-535 169-570q39 35 81.5 55.5t78.5 32q36 11.5 60 15l24 3.5q18 1 28.5 15t7.5 32l-4.5 33.5q-4.5 33.5-5 83.5t7.5 109q8 59 33 111Z"/>
    </Icon>
  );
});

IconMaterialFemurAlt.displayName = 'OnesyIconMaterialFemurAlt';

export default IconMaterialFemurAlt;
