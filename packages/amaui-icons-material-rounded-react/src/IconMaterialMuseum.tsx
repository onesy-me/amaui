import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMuseum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Museum'

      short_name='Museum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21t.288-.712Q2.575 20 3 20h1v-9h-.65q-.575 0-.962-.4Q2 10.2 2 9.625q0-.275.163-.55.162-.275.362-.425L10.85 2.8q.275-.2.563-.275.287-.075.587-.075t.588.075q.287.075.562.275l8.325 5.85q.2.15.362.437.163.288.163.563 0 .575-.387.963-.388.387-.963.387H20v9h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 22 21 22Zm3-2h12Zm3-2q.425 0 .713-.288Q10 17.425 10 17v-3l1.175 1.75q.15.225.375.337.225.113.45.113.25 0 .463-.113.212-.112.362-.337L14 14v3q0 .425.288.712.287.288.712.288t.713-.288Q16 17.425 16 17v-4.7q0-.55-.387-.925-.388-.375-.938-.375-.275 0-.587.175-.313.175-.463.4L12 14l-1.625-2.425q-.15-.225-.462-.4Q9.6 11 9.3 11q-.55 0-.925.375T8 12.3V17q0 .425.288.712Q8.575 18 9 18Zm9 2V8.65l-6-4.2-6 4.2V20Z"/>
    </Icon>
  );
});

IconMaterialMuseum.displayName = 'AmauiIconMaterialMuseum';

export default IconMaterialMuseum;
