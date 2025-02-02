import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalShippingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalShippingW100'

      short_name='LocalShipping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M223.76-206Q182-206 153-235.17q-29-29.16-29-70.83h-18q-12.75 0-21.37-8.63Q76-323.25 76-336v-352q0-26 17-43t43-17h460q24.75 0 42.38 17.62Q656-712.75 656-688v80h54q14.25 0 27 6.37 12.75 6.38 21 17.63l120 162q3 3.75 4.5 8.25T884-404v68q0 12.75-8.62 21.37Q866.75-306 854-306h-30q0 41.67-29.24 70.83-29.23 29.17-71 29.17Q682-206 653-235.17q-29-29.16-29-70.83H324q0 42-29.24 71-29.23 29-71 29Zm.24-28q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21ZM104-334h24q6-29 33.5-50.5T224-406q33 0 61.5 21t34.5 51h308v-354q0-14-9-23t-23-9H136q-12 0-22 10t-10 22v354Zm620 100q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm-68-180h194L734-567q-5-6-11.5-9.5T708-580h-52v166ZM366-527Z"/>
    </Icon>
  );
});

IconMaterialLocalShippingW100.displayName = 'OnesyIconMaterialLocalShippingW100';

export default IconMaterialLocalShippingW100;
