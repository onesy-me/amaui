import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSledding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sledding'

      short_name='Sledding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M765-40q-19 0-31.5-2T710-48L68-257q-12-4-17.5-14.5T49-294q4-12 15-18t23-2l129 42 18-57-128-42q-12-4-17.5-15T87-409q4-12 14.5-17.5T124-428l36 12v-138q0-12 6.5-21.5T184-590l195-84q8-4 15.5-5t16.5-1q34 0 55 29.5t10 64.5l-42 130 86-14q27-5 50.5 8t35.5 38l83 180 49 16q12 4 17.5 14.5T757-191q-4 12-15 18t-23 2l-104-34-19 57 133 43q8 2 16.5 3.5T765-100q36 0 65.5-29.5T860-195q0-28-11-50.5T814-283q-10-6-14.5-17.5T799-323q4-12 14.5-17.5t21.5-.5q41 21 63 59.5t22 86.5q0 62-46.5 108.5T765-40ZM539-166l19-58-267-86-18 57 266 87Zm46-112-47-102-159 35 206 67Zm-305-99q-6-13-7.5-27.5T276-433l41-127-77 33v137l40 13Zm200-323q-33 0-56.5-23.5T400-780q0-33 23.5-56.5T480-860q33 0 56.5 23.5T560-780q0 33-23.5 56.5T480-700Z"/>
    </Icon>
  );
});

IconMaterialSledding.displayName = 'OnesyIconMaterialSledding';

export default IconMaterialSledding;
