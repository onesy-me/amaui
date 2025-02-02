import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffW100'

      short_name='VisibilityOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M576-596q17 17 30 48.5t11 60.5q0 6-4 10t-10 4q-6 0-10-4t-4-10q2-27-6.5-50T557-577q-17-17-41-25.5t-50-5.5q-6 1-11-2.5t-6-9.5q-1-6 2.5-11t9.5-6q30-4 62.5 8.5T576-596Zm-96-124q-25 0-49.5 3t-48.5 9q-6 2-11-1.5t-7-8.5q-2-6 1-10.5t9-6.5q26-7 52.5-10t53.5-3q116 0 215 59t154 161q4 7 5.5 13.5T856-500q0 8-1.5 14.5T849-472q-19 36-45 66.5T747-349q-5 4-10.5 3.5T727-351q-4-5-3-10t6-9q32-27 58-59.5t44-70.5q-50-101-144.5-160.5T480-720Zm0 468q-114 0-210-59.5T115-469q-5-7-7-15t-2-16q0-8 2-16t7-15q26-42 57-79.5t72-65.5L142-778q-4-4-4.5-9.5T142-798q5-5 10-5t10 5l636 636q4 4 4.5 9.5T798-142q-5 5-10 5t-10-5L636-284q-36 18-75.5 25t-80.5 7ZM264-656q-45 29-79.5 68.5T128-500q50 101 144.5 160.5T480-280q35 0 69.5-5t66.5-19l-74-74q-14 9-29.5 11.5T480-364q-57 0-96.5-39.5T344-500q0-17 3-32.5t11-29.5l-94-94Zm277 125Zm-101 51Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffW100.displayName = 'OnesyIconMaterialVisibilityOffW100';

export default IconMaterialVisibilityOffW100;
