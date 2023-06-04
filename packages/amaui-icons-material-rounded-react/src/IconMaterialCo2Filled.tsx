import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCo2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2Filled'

      short_name='Co2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15q-.425 0-.712-.288Q10 14.425 10 14v-4q0-.425.288-.713Q10.575 9 11 9h3q.425 0 .713.287Q15 9.575 15 10v4q0 .425-.287.712Q14.425 15 14 15Zm.5-1.5h2v-3h-2ZM4 15q-.425 0-.712-.288Q3 14.425 3 14v-4q0-.425.288-.713Q3.575 9 4 9h3q.425 0 .713.287Q8 9.575 8 10v.25q0 .325-.213.537Q7.575 11 7.25 11q-.25 0-.45-.113-.2-.112-.3-.387h-2v3h2q.1-.275.3-.387Q7 13 7.25 13q.325 0 .537.212.213.213.213.538V14q0 .425-.287.712Q7.425 15 7 15Zm14 3q-.425 0-.712-.288Q17 17.425 17 17v-1.5q0-.425.288-.713.287-.287.712-.287h2v-1h-2.25q-.325 0-.538-.213Q17 13.075 17 12.75q0-.325.212-.538.213-.212.538-.212h2.75q.425 0 .712.287.288.288.288.713v1.5q0 .425-.288.712-.287.288-.712.288h-2v1h2.25q.325 0 .538.212.212.213.212.538 0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialCo2Filled.displayName = 'AmauiIconMaterialCo2Filled';

export default IconMaterialCo2Filled;
