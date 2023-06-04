import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpW100Filled'

      short_name='Help'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 17q.275 0 .463-.188.187-.187.187-.462t-.187-.463q-.188-.187-.463-.187t-.462.187q-.188.188-.188.463t.188.462q.187.188.462.188Zm0-9.25q.875 0 1.413.462.537.463.537 1.263 0 .475-.25.912-.25.438-.75.913-.65.6-.962 1.112-.313.513-.363 1.088-.025.125.075.238.1.112.25.112t.25-.088q.1-.087.125-.237.075-.425.3-.775.225-.35.725-.85.725-.725 1.013-1.263.287-.537.287-1.162 0-1.05-.737-1.738-.738-.687-1.863-.687-.75 0-1.45.375t-1.125 1.05q-.075.125-.05.25.025.125.15.2.125.075.288.037.162-.037.287-.187.35-.4.75-.713.4-.312 1.1-.312ZM12 20.7q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3t3.413.675q1.587.675 2.762 1.85t1.85 2.762Q20.7 10.175 20.7 12q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Z"/>
    </Icon>
  );
});

IconMaterialHelpW100Filled.displayName = 'AmauiIconMaterialHelpW100Filled';

export default IconMaterialHelpW100Filled;
