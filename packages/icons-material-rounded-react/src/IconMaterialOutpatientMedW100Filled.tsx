import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutpatientMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientMedW100Filled'

      short_name='OutpatientMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M139-748q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h348q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H139Zm174.24 468q16.76 0 28.26-11.67Q353-303.33 353-320v-60h60q16.67 0 28.33-11.74Q453-403.47 453-420.24q0-16.76-11.67-28.26Q429.67-460 413-460h-60v-60q0-16.67-11.74-28.33Q329.53-560 312.76-560q-16.76 0-28.26 11.67Q273-536.67 273-520v60h-60q-16.67 0-28.33 11.74Q173-436.53 173-419.76q0 16.76 11.67 28.26Q196.33-380 213-380h60v60q0 16.67 11.74 28.33Q296.47-280 313.24-280ZM145-172q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h336q26 0 43 17t17 43v376q0 26-17 43t-43 17H145Zm616-214q-5-5-5-10.5t5-10.5l61-59H672q-5 0-9-4.5t-4-9.5q0-5 4.21-9t8.79-4h150l-59-59q-5-5-5.5-10t4.57-10q5.08-5 10.68-5t10.67 5l71.51 71.38q9.07 8.9 9.07 20.76 0 11.86-9 20.86l-73 73q-5 5-10.5 5t-10.5-5Z"/>
    </Icon>
  );
});

IconMaterialOutpatientMedW100Filled.displayName = 'OnesyIconMaterialOutpatientMedW100Filled';

export default IconMaterialOutpatientMedW100Filled;
