import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImportContactsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportContactsW100'

      short_name='ImportContacts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-318q54 0 105 12.5T466-264v-392q-44-33-98-49.5T260-722q-41 0-77.5 6.5T120-693v401q26-12 65-19t75-7Zm234 54q50-29 101-41.5T700-318q36 0 75 7t65 19v-401q-26-16-62.5-22.5T700-722q-54 0-108 16.5T494-656v392Zm-14 40q-49-32-105-49t-115-17q-48 0-92.5 12T92-249v-462q31-18 75-28.5t93-10.5q59 0 115 17.5T480-682q49-33 105-50.5T700-750q49 0 92.5 10.5T868-711v462q-31-17-75.5-29T700-290q-59 0-115 17t-105 49ZM293-493Z"/>
    </Icon>
  );
});

IconMaterialImportContactsW100.displayName = 'OnesyIconMaterialImportContactsW100';

export default IconMaterialImportContactsW100;
