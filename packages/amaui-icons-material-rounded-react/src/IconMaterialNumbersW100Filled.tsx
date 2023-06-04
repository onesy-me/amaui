import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNumbersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NumbersW100Filled'

      short_name='Numbers'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.125 14.8 8.2 18.55q-.025.125-.112.188-.088.062-.213.062-.15 0-.25-.125t-.05-.275l.9-3.6h-3.05q-.175 0-.287-.125-.113-.125-.063-.3.05-.125.138-.2.087-.075.212-.075H8.65L9.7 9.9H6.65q-.175 0-.287-.125-.113-.125-.063-.3.05-.125.138-.2.087-.075.212-.075h3.225l.925-3.75q.025-.125.113-.188.087-.062.212-.062.15 0 .25.125t.05.275l-.9 3.6h4.35l.925-3.75q.025-.125.113-.188.087-.062.212-.062.15 0 .25.125t.05.275l-.9 3.6h3.05q.175 0 .288.125.112.125.062.3-.05.125-.137.2-.088.075-.213.075H15.35l-1.05 4.2h3.05q.175 0 .288.125.112.125.062.3-.05.125-.138.2-.087.075-.212.075h-3.225l-.925 3.75q-.025.125-.112.188-.088.062-.213.062-.15 0-.25-.125t-.05-.275l.9-3.6Zm.175-.7h4.35l1.05-4.2h-4.35Z"/>
    </Icon>
  );
});

IconMaterialNumbersW100Filled.displayName = 'AmauiIconMaterialNumbersW100Filled';

export default IconMaterialNumbersW100Filled;
