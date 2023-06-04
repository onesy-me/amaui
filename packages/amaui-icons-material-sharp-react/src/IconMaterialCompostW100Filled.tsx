import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompostW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompostW100Filled'

      short_name='Compost'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.35q-1.575 0-2.962-.6-1.388-.6-2.413-1.625T5 14.713q-.6-1.388-.6-2.963 0-1.575.6-2.963.6-1.387 1.625-2.412T9.038 4.75q1.387-.6 2.962-.6v-2l3.2 3.2-3.2 3.2v-2q-2.15 0-3.675 1.525T6.8 11.75q0 1.325.6 2.45.6 1.125 1.65 1.825.3-.55.938-.938.637-.387 1.462-.487-.075-.425-.175-.85-.1-.425-.225-.775-.225.175-.488.275-.262.1-.562.1-.65 0-1.125-.475T8.4 11.75v-.8q0-.35-.1-.638-.1-.287-.3-.562 1-.025 1.775.175.675.175 1.238.587.562.413.587 1.238 0 .2-.038.35-.037.15-.112.3-.25-.2-.512-.363-.263-.162-.538-.287.35.275.788.812.437.538.812 1.263.425-.975 1.013-1.925.587-.95 1.387-1.75-.45.325-.875.675-.425.35-.825.775-.125-.225-.212-.5-.088-.275-.088-.55 0-.825.588-1.413.587-.587 1.412-.587h.8q.45 0 .75-.125t.5-.275q.225-.175.35-.4.075 1.35-.125 2.4-.2.9-.7 1.65-.5.75-1.575.75-.3 0-.562-.088-.263-.087-.488-.212-.15.375-.325 1-.175.625-.275 1.35.75.15 1.325.525t.875.9q1.025-.7 1.637-1.813.613-1.112.613-2.462h2.4q0 1.575-.6 2.963-.6 1.387-1.625 2.412t-2.412 1.625q-1.388.6-2.963.6Z"/>
    </Icon>
  );
});

IconMaterialCompostW100Filled.displayName = 'AmauiIconMaterialCompostW100Filled';

export default IconMaterialCompostW100Filled;
