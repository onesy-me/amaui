import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalSee = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSee'

      short_name='LocalSee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V8q0-.825.588-1.412Q3.175 6 4 6h3.175L8.4 4.65q.275-.325.662-.488Q9.45 4 9.875 4h.375q-.125.5-.188 1.088Q10 5.675 10 6.225q0 .425.062.925.063.5.188.85H4v12h16v-4.025q.45-.425.988-.95Q21.525 14.5 22 14v6q0 .825-.587 1.413Q20.825 22 20 22Zm8-3.5q1.3 0 2.388-.675 1.087-.675 1.637-1.825-.375-.35-.8-.762-.425-.413-.775-.763-.15.875-.85 1.45T12 16.5q-1.05 0-1.775-.725Q9.5 15.05 9.5 14q0-1 .675-1.725.675-.725 1.775-.775-.25-.35-.562-.888-.313-.537-.513-.962Q9.4 9.975 8.45 11.2 7.5 12.425 7.5 14q0 1.875 1.312 3.188Q10.125 18.5 12 18.5Zm6.6-4.025q2.725-2.4 4.063-4.463Q24 7.95 24 6.15q0-2.825-1.812-4.488Q20.375 0 18 0t-4.188 1.662Q12 3.325 12 6.15q0 1.8 1.338 3.862 1.337 2.063 4.062 4.463.25.225.6.225t.6-.225Zm-.6-2.15q-2.6-2.45-3.3-3.95-.7-1.5-.7-2.225 0-2.025 1.263-3.088Q16.525 2 18 2t2.738 1.062Q22 4.125 22 6.15q0 .725-.7 2.225t-3.3 3.95Zm-.85-4.075L18 7.6l.85.65q.325.25.538.087.212-.162.087-.537l-.325-1.075.875-.7q.325-.275.238-.525-.088-.25-.513-.25h-1.025l-.35-1.05q-.075-.2-.163-.313-.087-.112-.212-.112-.075 0-.375.425l-.35 1.05H16.25q-.425 0-.525.25-.1.25.25.525l.875.7-.325 1.075q-.125.375.088.537.212.163.537-.087ZM12 14Zm6-7.275Z"/>
    </Icon>
  );
});

IconMaterialLocalSee.displayName = 'AmauiIconMaterialLocalSee';

export default IconMaterialLocalSee;
