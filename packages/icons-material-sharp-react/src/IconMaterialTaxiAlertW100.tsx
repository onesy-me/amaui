import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaxiAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaxiAlertW100'

      short_name='TaxiAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-192 192Zm464.24-56q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm-368 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm403.35-236Q598-532 555-575t-43-105.38Q512-742 555.04-785q43.04-43 105.37-43Q722-828 765-785t43 105q0 62-43.41 105t-105 43ZM646-660h28v-108h-28v108Zm14 72q8 0 12.5-5t5.5-12q0-7.6-5-13.3-5-5.7-13-5.7t-13 5q-5 5-5 13t5 13q5 5 13 5ZM132-132v-300l83-236h153v-56h48q-2 11-3 21.76-1 10.76-1 22.24 0 11 .5 20.5T415-640H236l-64 180h373q26 14 54.5 21t60.5 7H160v192h560v-192q6 0 14-2.5t14-6.5v309h-28v-80H160v80h-28Z"/>
    </Icon>
  );
});

IconMaterialTaxiAlertW100.displayName = 'OnesyIconMaterialTaxiAlertW100';

export default IconMaterialTaxiAlertW100;
