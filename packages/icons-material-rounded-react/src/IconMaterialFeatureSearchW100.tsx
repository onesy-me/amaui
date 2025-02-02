import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeatureSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeatureSearchW100'

      short_name='FeatureSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h195q6 0 10 4t4 10q0 6-4 10t-10 4H192q-12 0-22 10t-10 22v496q0 12 10 22t22 10h496q12 0 22-10t10-22v-248q0-6 4-10t10-4q6 0 10 4t4 10v248q0 26-17 43t-43 17H192Zm536-480 124 124q4 4 4.5 9.5T852-468q-5 5-10 5t-10-5L708-592q-17 17-40.5 24.5T620-560q-59 0-99.5-40.5T480-700q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 27-8.5 49T728-612Zm-108 24q47 0 79.5-32.5T732-700q0-47-32.5-79.5T620-812q-47 0-79.5 32.5T508-700q0 47 32.5 79.5T620-588ZM160-468v308-560 240-11 23Z"/>
    </Icon>
  );
});

IconMaterialFeatureSearchW100.displayName = 'OnesyIconMaterialFeatureSearchW100';

export default IconMaterialFeatureSearchW100;
