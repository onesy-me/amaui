import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalLibraryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryW100'

      short_name='LocalLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-278v-293q0-14 10.41-22.5T207-600q77 12 145.5 46.5T480-468q59-51 127.5-85.5T753-600q14.18-2 24.59 6.5T788-571v293q0 11-7.5 19.5T762-248q-72 11-132.5 33.5T509-152q-7 5-14.08 7-7.07 2-15 2-7.92 0-14.92-2t-14-7q-60-40-120-62.5T198-248q-11-2-18.5-10.5T172-278Zm308 112q63-46 134-74.43 71-28.43 146-37.57v-296q-80 13-151.5 50T480-430q-57-57-128.5-94T200-574v296q75 9.14 146 37.57T480-166Zm0-456q-49.5 0-84.75-35.25T360-742q0-49.5 35.25-84.75T480-862q49.5 0 84.75 35.25T600-742q0 49.5-35.25 84.75T480-622Zm.04-28Q518-650 545-677.04q27-27.03 27-65Q572-780 544.96-807q-27.03-27-65-27Q442-834 415-806.96q-27 27.03-27 65Q388-704 415.04-677q27.03 27 65 27Zm-.04-92Zm0 312Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryW100.displayName = 'OnesyIconMaterialLocalLibraryW100';

export default IconMaterialLocalLibraryW100;
