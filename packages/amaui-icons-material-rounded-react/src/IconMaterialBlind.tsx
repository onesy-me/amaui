import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlind = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Blind'

      short_name='Blind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 5q-.825 0-1.412-.588Q9.5 3.825 9.5 3q0-.85.588-1.425Q10.675 1 11.5 1q.85 0 1.425.575Q13.5 2.15 13.5 3q0 .825-.575 1.412Q12.35 5 11.5 5Zm.5 17.5q-.425 0-.712-.288Q11 21.925 11 21.5v-4l-1.775-2.55-.175 2.95q-.025.275-.112.55-.088.275-.288.525L6.6 21.7q-.25.325-.65.387-.4.063-.75-.212-.325-.25-.388-.65-.062-.4.188-.725l2-2.675V12.5q0-.775.15-1.713.15-.937.35-1.687L6 9.95v2.55q0 .425-.287.712-.288.288-.713.288t-.713-.288Q4 12.925 4 12.5V9.95q0-.55.275-1.012.275-.463.75-.738L9.4 5.725q.2-.125.425-.188.225-.062.475-.062.625 0 1.125.312.5.313.725.838l.775 1.675q.425.9 1.225 1.462.8.563 2 .688.375.05.613.337.237.288.237.688 0 .425-.275.713-.275.287-.7.312l5.25 9.1q.1.2.05.388-.05.187-.25.287-.175.125-.362.075-.188-.05-.313-.25l-5.675-9.9q-1-.3-1.825-.925T11.5 9.8q-.25.7-.375 1.638-.125.937-.1 1.762l1.625 2.275q.175.25.263.537.087.288.087.613V21.5q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialBlind.displayName = 'AmauiIconMaterialBlind';

export default IconMaterialBlind;
