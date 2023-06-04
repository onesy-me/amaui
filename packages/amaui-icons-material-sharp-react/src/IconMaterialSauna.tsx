import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSauna = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sauna'

      short_name='Sauna'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976V176h800v800H80Zm80-240v160h80v-80h-40v-80h-40Zm0-80h40v-40h40V516q0-25 17.5-42.5T300 456h80q25 0 42.5 17.5T440 516v100h40v40h320V256H160v400Zm100 100h160v-80H260v80Zm80-340q-25 0-42.5-17.5T280 356q0-25 17.5-42.5T340 296q25 0 42.5 17.5T400 356q0 25-17.5 42.5T340 416Zm-20 480h40v-80h-40v80Zm120 0h360V736H480v80h-40v80Zm50-400q2-13 2.5-19.5t.5-13.5q0-11-4.5-21T470 415q-15-19-22.5-38t-7.5-39q0-8 1-16.5l3-25.5h60q-2 11-3 20.5t-1 21.5q0 11 4.5 21.5T520 382q18 22 26 41.5t8 39.5q0 11-1 18t-3 15h-60Zm100 0q2-13 2.5-19.5t.5-13.5q0-11-4.5-21T570 415q-15-19-22.5-38t-7.5-39q0-8 1-16.5l3-25.5h60q-2 11-3 20.5t-1 21.5q0 11 4.5 21.5T620 382q18 22 26 41.5t8 39.5q0 11-1 18t-3 15h-60Zm102 0q2-13 2.5-19.5t.5-13.5q0-11-4.5-21T672 415q-15-19-22.5-38t-7.5-39q0-8 1-16.5l3-25.5h60q-2 11-3 20.5t-1 21.5q0 11 4.5 21.5T722 382q18 22 26 41.5t8 39.5q0 11-1 18t-3 15h-60ZM260 756v-80 80Z"/>
    </Icon>
  );
});

IconMaterialSauna.displayName = 'AmauiIconMaterialSauna';

export default IconMaterialSauna;
