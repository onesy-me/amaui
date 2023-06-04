import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoGraphW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoGraphW100Filled'

      short_name='AutoGraph'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.9 19.35q-.125-.125-.125-.25t.125-.25l5.825-5.825q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L14.25 16.5l6.725-7.75q.1-.125.225-.125t.25.1q.1.1.112.225.013.125-.087.25l-6.65 7.725q-.125.125-.263.2-.137.075-.287.075-.15 0-.287-.05-.138-.05-.263-.175L10.25 13.5 4.4 19.35q-.1.1-.238.112-.137.013-.262-.112Zm-.15-7.475q-.125 0-.225-.05t-.15-.175l-.075-.2-.2-.075q-.125-.05-.175-.15-.05-.1-.05-.225t.05-.225q.05-.1.175-.15l.2-.075.075-.2q.05-.125.15-.175.1-.05.225-.05t.225.05q.1.05.15.175l.075.2.2.075q.225.125.225.375t-.225.375l-.2.075-.075.2q-.05.125-.15.175-.1.05-.225.05Zm11-2q-.125 0-.225-.05t-.15-.175l-.075-.2-.2-.075q-.125-.05-.175-.15-.05-.1-.05-.225t.05-.225q.05-.1.175-.15l.2-.075.075-.2q.05-.125.15-.175.1-.05.225-.05t.225.05q.1.05.15.175l.075.2.2.075q.125.05.175.15.05.1.05.225t-.05.225q-.05.1-.175.15l-.2.075-.075.2q-.05.125-.15.175-.1.05-.225.05ZM8.25 6.85q-.125 0-.225-.05t-.15-.175L7.65 6.1l-.525-.225q-.125-.05-.175-.15-.05-.1-.05-.225t.05-.225q.05-.1.175-.15L7.65 4.9l.225-.525q.05-.125.15-.175.1-.05.225-.05t.225.05q.1.05.15.175l.225.525.525.225q.125.05.175.15.05.1.05.225t-.05.225q-.05.1-.175.15L8.85 6.1l-.225.525q-.05.125-.15.175-.1.05-.225.05Z"/>
    </Icon>
  );
});

IconMaterialAutoGraphW100Filled.displayName = 'AmauiIconMaterialAutoGraphW100Filled';

export default IconMaterialAutoGraphW100Filled;
