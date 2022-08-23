import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkullSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkullSharpW100Filled'
      short_name='Skull'

      {...props}
    >
      <path d="M7.3 20.7v-3.8q-.9-.375-1.637-.975-.738-.6-1.263-1.375-.525-.775-.812-1.675Q3.3 11.975 3.3 11q0-3.4 2.438-5.55Q8.175 3.3 12 3.3q3.825 0 6.263 2.15Q20.7 7.6 20.7 11q0 .975-.287 1.875-.288.9-.813 1.675-.525.775-1.263 1.375-.737.6-1.637.975v3.8ZM8 20h1.55v.7h1.4V20h2.1v.7h1.4V20H16v-3.55q.9-.3 1.638-.838.737-.537 1.262-1.25.525-.712.812-1.575Q20 11.925 20 11q0-3.125-2.212-5.062Q15.575 4 12 4T6.213 5.938Q4 7.875 4 11q0 .925.287 1.787.288.863.813 1.575.525.713 1.263 1.25.737.538 1.637.838Zm2.75-5h2.5L12 12.5ZM8.5 12.5q.625 0 1.062-.438Q10 11.625 10 11t-.438-1.062Q9.125 9.5 8.5 9.5t-1.062.438Q7 10.375 7 11t.438 1.062q.437.438 1.062.438Zm7 0q.625 0 1.062-.438Q17 11.625 17 11t-.438-1.062Q16.125 9.5 15.5 9.5t-1.062.438Q14 10.375 14 11t.438 1.062q.437.438 1.062.438ZM8 20v-3.55q-.9-.3-1.637-.838-.738-.537-1.263-1.25-.525-.712-.813-1.575Q4 11.925 4 11q0-3.125 2.213-5.062Q8.425 4 12 4q3.575 0 5.788 1.938Q20 7.875 20 11q0 .925-.288 1.787-.287.863-.812 1.575-.525.713-1.262 1.25-.738.538-1.638.838V20h-1.55v-1.2h-1.4V20h-2.1v-1.2h-1.4V20Z"/>
    </Icon>
  );
});

IconMaterialSkullSharpW100Filled.displayName = 'AmauiIconMaterialSkullSharpW100Filled';

export default IconMaterialSkullSharpW100Filled;
