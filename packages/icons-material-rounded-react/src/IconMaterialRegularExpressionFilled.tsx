import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRegularExpressionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RegularExpressionFilled'

      short_name='RegularExpression'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-482q0-69 22.5-133.5T169-734q11-13 27.5-14t28.5 11q12 12 12.5 28.5T227-678q-33 42-50 92t-17 104q0 54 18 104t50 92q11 14 10.5 30T226-228q-12 12-28.5 11.5T170-230q-43-54-66.5-118.5T80-482Zm300 242q-25 0-42.5-17.5T320-300q0-25 17.5-42.5T380-360q25 0 42.5 17.5T440-300q0 25-17.5 42.5T380-240Zm179-200q-17 0-28.5-11.5T519-480v-31l-26 16q-14 8-30.5 3.5T438-510q-8-14-3.5-30.5T453-565l26-15-27-15q-14-8-18-24.5t4-30.5q8-15 24.5-18.5T493-664l26 15v-31q0-17 11.5-28.5T559-720q17 0 28.5 11.5T599-680v31l26-16q14-8 30.5-3.5T680-650q8 14 3.5 30.5T665-595l-26 15 27 15q14 8 18 24.5t-4 30.5q-8 15-24.5 18.5T625-496l-26-15v31q0 17-11.5 28.5T559-440Zm321-42q0 69-22.5 133.5T791-230q-11 13-27.5 13.5T735-228q-12-12-12.5-28t10.5-30q33-42 50-92t17-104q0-54-18-104t-50-92q-11-14-10-30.5t13-28.5q12-12 28-11t27 14q43 54 66.5 118.5T880-482Z"/>
    </Icon>
  );
});

IconMaterialRegularExpressionFilled.displayName = 'OnesyIconMaterialRegularExpressionFilled';

export default IconMaterialRegularExpressionFilled;
