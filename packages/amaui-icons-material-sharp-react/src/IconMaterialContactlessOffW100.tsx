import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactlessOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessOffW100'

      short_name='ContactlessOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.7 16.5-.65-.3q.15-.425.25-.85l.2-.85.6.6q-.075.35-.175.7-.1.35-.225.7Zm-3.25-1.35-.65-.25q.225-.675.337-1.412.113-.738.113-1.488v-.388q0-.187-.025-.387l.725.725q0 .825-.112 1.637-.113.813-.388 1.563ZM8.2 13.8l-.65-.3q.075-.35.138-.738.062-.387.062-.762t-.062-.762q-.063-.388-.138-.738l.65-.3q.125.425.188.887.062.463.062.913t-.062.912q-.063.463-.188.888Zm7.225-1.175-.675-.675q0-1.075-.175-2.138Q14.4 8.75 14.05 7.8l.65-.3q.375 1.05.563 2.188.187 1.137.187 2.312 0 .15-.012.3-.013.15-.013.325Zm-3.15-3.15L11.7 8.9l.475-.225q.05.2.075.387.025.188.025.413ZM21.3 22.3l-3.675-3.675q-1.15.975-2.575 1.525-1.425.55-3.05.55-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575L2.25 3.25l.5-.5L21.8 21.8ZM12 20q1.475 0 2.775-.5 1.3-.5 2.35-1.375L5.875 6.875Q5 7.925 4.5 9.225T4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm7.4-3.4-.525-.525q.55-.9.837-1.925Q20 13.125 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.125 0-2.15.287-1.025.288-1.925.838L7.4 4.6q1-.625 2.162-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.438-.338 1.162-.963 2.162Zm-6-6Zm-1.9 1.9Z"/>
    </Icon>
  );
});

IconMaterialContactlessOffW100.displayName = 'AmauiIconMaterialContactlessOffW100';

export default IconMaterialContactlessOffW100;
