import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonetizationOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonetizationOnW100Filled'

      short_name='MonetizationOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.6 18.5h.75v-1.15q1.025-.05 2.037-.713 1.013-.662 1.013-2.087 0-1.05-.65-1.75t-2.45-1.35q-1.7-.6-2.125-1.025Q9.75 10 9.75 9.2t.637-1.35q.638-.55 1.663-.55.75 0 1.275.337.525.338.875.863l.65-.25q-.375-.675-1.038-1.113Q13.15 6.7 12.4 6.65V5.5h-.75v1.15q-1.325.2-1.987.937Q9 8.325 9 9.2q0 1.05.675 1.675T12 12.1q1.625.6 2.163 1.088.537.487.537 1.362 0 1.125-.825 1.612-.825.488-1.725.488-.875 0-1.588-.5-.712-.5-1.162-1.4l-.65.3q.45.975 1.163 1.5.712.525 1.687.75Zm.4 2.2q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialMonetizationOnW100Filled.displayName = 'AmauiIconMaterialMonetizationOnW100Filled';

export default IconMaterialMonetizationOnW100Filled;
