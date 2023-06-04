import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapsUgcW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgcW100'

      short_name='MapsUgc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 12.025ZM2.9 21.1l1.45-4.9q-.475-1-.762-2.05Q3.3 13.1 3.3 12q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7q-1.1 0-2.15-.287-1.05-.288-2.05-.763Zm8.75-5.75h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3Zm-7.7 4.7 3.2-.95q.15-.05.288-.075.137-.025.287-.025.2 0 .412.05.213.05.413.15.8.4 1.675.6.875.2 1.775.2 3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 .9.2 1.775.2.875.6 1.675.175.325.188.687.012.363-.088.713Z"/>
    </Icon>
  );
});

IconMaterialMapsUgcW100.displayName = 'AmauiIconMaterialMapsUgcW100';

export default IconMaterialMapsUgcW100;
