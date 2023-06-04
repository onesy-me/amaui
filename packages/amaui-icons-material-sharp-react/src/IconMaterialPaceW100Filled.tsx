import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaceW100Filled'

      short_name='Pace'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 924q-72.21 0-135.72-27.391-63.51-27.392-110.49-74.348-46.98-46.957-74.385-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.405 63.559 27.405 110.574 74.385 47.016 46.98 74.442 110.49Q828 503.79 828 576q0 27-4 53t-12 51q-6-4-12-7.5t-13-5.5q7-22 10-44.5t3-46.5q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93q55 0 103.966-17.105Q632.932 861.789 674 831q5 5 9.5 10t10.5 9q-45 35-98.927 54.5Q541.146 924 480 924Zm275.056-134Q745 790 738 783.056q-7-6.943-7-17Q731 756 737.944 749q6.943-7 17-7Q765 742 772 748.944q7 6.943 7 17Q779 776 772.056 783q-6.943 7-17 7ZM630 746 466 581.979V376h28v194l156 156-20 20Z"/>
    </Icon>
  );
});

IconMaterialPaceW100Filled.displayName = 'AmauiIconMaterialPaceW100Filled';

export default IconMaterialPaceW100Filled;
