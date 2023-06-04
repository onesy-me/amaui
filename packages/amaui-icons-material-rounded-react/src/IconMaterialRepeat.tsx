import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Repeat'

      short_name='Repeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 17v-3q0-.425.288-.713Q17.575 13 18 13t.712.275q.288.275.288.7V18q0 .425-.288.712Q18.425 19 18 19H6.85l.825.825q.3.3.313.725.012.425-.288.725t-.712.3q-.413 0-.688-.275l-2.6-2.6q-.275-.275-.275-.7 0-.425.275-.7l2.575-2.575q.3-.3.713-.3.412 0 .712.3t.3.713q0 .412-.3.712l-.85.85ZM7 7v3q0 .425-.287.712Q6.425 11 6 11t-.713-.275Q5 10.45 5 10.025V6q0-.425.287-.713Q5.575 5 6 5h11.15l-.825-.825q-.3-.3-.312-.725-.013-.425.287-.725t.713-.3q.412 0 .687.275l2.6 2.6q.275.275.275.7 0 .425-.275.7l-2.575 2.575q-.3.3-.712.3-.413 0-.713-.3t-.3-.713q0-.412.3-.712l.85-.85Z"/>
    </Icon>
  );
});

IconMaterialRepeat.displayName = 'AmauiIconMaterialRepeat';

export default IconMaterialRepeat;
