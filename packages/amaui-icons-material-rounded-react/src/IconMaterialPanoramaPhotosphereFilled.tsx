import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaPhotosphereFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaPhotosphereFilled'

      short_name='PanoramaPhotosphere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.025 0-5.412-1.587Q4.2 18.825 3 16.3q-.275-.125-.5-.225-.225-.1-.45-.225-.5-.275-.775-.725Q1 14.675 1 14.1V9.9q0-.575.275-1.025.275-.45.775-.725.225-.125.45-.225T3 7.7q1.2-2.525 3.588-4.112Q8.975 2 12 2t5.413 1.588Q19.8 5.175 21 7.7q.275.125.5.225.225.1.45.225.5.275.775.737Q23 9.35 23 9.9v4.2q0 .55-.275 1.013-.275.462-.775.737-.225.125-.45.225t-.5.225q-1.2 2.525-3.587 4.113Q15.025 22 12 22Zm0-2q1.725 0 3.275-.712 1.55-.713 2.675-1.988-1.475.35-2.962.525Q13.5 18 12 18t-2.988-.175Q7.525 17.65 6.05 17.3q1.125 1.275 2.675 1.988Q10.275 20 12 20Zm0-16q-1.725 0-3.275.713-1.55.712-2.675 1.987 1.475-.35 2.962-.525Q10.5 6 12 6t2.988.175q1.487.175 2.962.525-1.125-1.275-2.675-1.987Q13.725 4 12 4Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereFilled.displayName = 'AmauiIconMaterialPanoramaPhotosphereFilled';

export default IconMaterialPanoramaPhotosphereFilled;
