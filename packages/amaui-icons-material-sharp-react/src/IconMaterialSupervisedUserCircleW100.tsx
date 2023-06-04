import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupervisedUserCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisedUserCircleW100'

      short_name='SupervisedUserCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 12.85q-1.2 0-2.025-.825T6.65 10q0-1.2.825-2.025T9.5 7.15q1.2 0 2.025.825T12.35 10q0 1.2-.825 2.025T9.5 12.85Zm0-.7q.875 0 1.512-.638.638-.637.638-1.512t-.638-1.513Q10.375 7.85 9.5 7.85t-1.512.637Q7.35 9.125 7.35 10q0 .875.638 1.512.637.638 1.512.638Zm7 2.2q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Zm-5.55 5.6q1.1-1.85 2.725-2.575 1.625-.725 2.825-.725.5 0 .938.062.437.063.862.188.675-.825 1.188-2.113Q20 13.5 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 1.35.412 2.537.413 1.188 1.088 2.163.8-.45 1.988-.75 1.187-.3 2.012-.3.375 0 .838.063.462.062.662.137-.225.125-.45.3t-.35.3q-.15-.05-.35-.075-.2-.025-.35-.025-.8 0-1.837.263-1.038.262-1.713.637.975 1.125 2.275 1.8 1.3.675 2.725.9Zm1.05.75q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialSupervisedUserCircleW100.displayName = 'AmauiIconMaterialSupervisedUserCircleW100';

export default IconMaterialSupervisedUserCircleW100;
