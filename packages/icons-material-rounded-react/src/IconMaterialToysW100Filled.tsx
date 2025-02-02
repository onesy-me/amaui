import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToysW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysW100Filled'

      short_name='Toys'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-186q-42 0-69.5-31.5T186-292q-31-15-48.5-44T120-400q0-45 29-77.5t73-40.5l-88-88-28 28q-5 5-11 6t-11-4q-5-5-4-11t6-11l76-76q5-5 11-6t11 4q5 5 4 11t-6 11l-28 28 90 90 40-118q8-23 27-38.5t43-15.5h248q24 0 43 15.5t27 38.5l46 134q51 0 86.5 34.5T840-400q0 35-17.5 64T774-292q3 43-24.5 74.5T680-186q-39 0-66.5-27.5T586-280H374q0 39-27.5 66.5T280-186Zm-12-334h196v-160H354q-15 0-27 9.5T310-646l-42 126Zm224 0h196l-42-126q-5-15-17-24.5t-27-9.5H492v160ZM280-214q27 0 46.5-19.5T346-280q0-27-19.5-46.5T280-346q-27 0-46.5 19.5T214-280q0 27 19.5 46.5T280-214Zm400 0q27 0 46.5-19.5T746-280q0-27-19.5-46.5T680-346q-27 0-46.5 19.5T614-280q0 27 19.5 46.5T680-214Z"/>
    </Icon>
  );
});

IconMaterialToysW100Filled.displayName = 'OnesyIconMaterialToysW100Filled';

export default IconMaterialToysW100Filled;
