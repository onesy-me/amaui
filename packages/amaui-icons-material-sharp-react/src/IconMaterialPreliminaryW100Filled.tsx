import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPreliminaryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreliminaryW100Filled'

      short_name='Preliminary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16.65q.275 0 .463-.188.187-.187.187-.462t-.187-.463Q9.275 15.35 9 15.35t-.463.187q-.187.188-.187.463t.187.462q.188.188.463.188Zm3 0q.275 0 .463-.188.187-.187.187-.462t-.187-.463q-.188-.187-.463-.187t-.462.187q-.188.188-.188.463t.188.462q.187.188.462.188Zm3 0q.275 0 .463-.188.187-.187.187-.462t-.187-.463q-.188-.187-.463-.187t-.462.187q-.188.188-.188.463t.188.462q.187.188.462.188Zm-4.05-3.575 4.725-4.725-.5-.5-4.225 4.25-2.125-2.125-.5.475ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPreliminaryW100Filled.displayName = 'AmauiIconMaterialPreliminaryW100Filled';

export default IconMaterialPreliminaryW100Filled;
