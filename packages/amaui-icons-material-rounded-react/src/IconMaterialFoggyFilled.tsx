import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoggyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoggyFilled'

      short_name='Foggy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 19q-.425 0-.712-.288Q17 18.425 17 18t.288-.712Q17.575 17 18 17t.712.288Q19 17.575 19 18t-.288.712Q18.425 19 18 19ZM7 22q-.425 0-.713-.288Q6 21.425 6 21t.287-.712Q6.575 20 7 20t.713.288Q8 20.575 8 21t-.287.712Q7.425 22 7 22Zm-1-3q-.425 0-.713-.288Q5 18.425 5 18t.287-.712Q5.575 17 6 17h9q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 19 15 19Zm4 3q-.425 0-.712-.288Q9 21.425 9 21t.288-.712Q9.575 20 10 20h7q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22Zm-2.5-6q-2.275 0-3.887-1.613Q2 12.775 2 10.5q0-2.075 1.375-3.625 1.375-1.55 3.4-1.825.8-1.425 2.188-2.238Q10.35 2 12 2q2.25 0 3.912 1.438 1.663 1.437 2.013 3.587 1.725.15 2.9 1.425Q22 9.725 22 11.5q0 1.875-1.312 3.188Q19.375 16 17.5 16Z"/>
    </Icon>
  );
});

IconMaterialFoggyFilled.displayName = 'AmauiIconMaterialFoggyFilled';

export default IconMaterialFoggyFilled;
