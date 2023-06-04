import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHistoryToggleOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryToggleOff'

      short_name='HistoryToggleOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13 11.6 3 3q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-3.3-3.3q-.15-.15-.225-.338-.075-.187-.075-.387V8q0-.425.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8ZM2.85 16.075q-.325-.725-.525-1.488-.2-.762-.275-1.587h2.025q.075.55.212 1.062.138.513.338 1.013ZM2.05 11q.075-.825.288-1.6.212-.775.537-1.5l1.75 1q-.2.5-.338 1.025-.137.525-.212 1.075Zm4.125 9.15q-.675-.5-1.25-1.088-.575-.587-1.075-1.262l1.75-1q.35.45.738.837.387.388.837.738Zm-.55-12.975-1.775-1q.5-.675 1.075-1.25t1.25-1.075l1 1.775q-.45.35-.825.725-.375.375-.725.825ZM11 21.95q-.825-.075-1.6-.287-.775-.213-1.5-.538l1-1.75q.5.2 1.025.337.525.138 1.075.213ZM8.9 4.625l-1-1.75q.725-.325 1.5-.538.775-.212 1.6-.287v2.025q-.55.075-1.075.212-.525.138-1.025.338ZM13 21.95v-2.025q.55-.075 1.075-.213.525-.137 1.025-.337l1 1.75q-.725.325-1.5.538-.775.212-1.6.287Zm2.1-17.325q-.5-.2-1.025-.338Q13.55 4.15 13 4.075V2.05q.825.075 1.6.287.775.213 1.5.538Zm2.725 15.525-1-1.775q.45-.35.825-.725.375-.375.725-.825l1.775 1q-.5.675-1.075 1.262-.575.588-1.25 1.063Zm.55-12.975q-.35-.425-.737-.813-.388-.387-.813-.737l1-1.775q.65.475 1.237 1.062.588.588 1.063 1.238ZM19.925 11q-.075-.575-.212-1.088-.138-.512-.338-1.012l1.75-1.025q.325.725.538 1.512.212.788.287 1.613Zm1.2 5.1-1.75-1q.2-.5.338-1.025.137-.525.212-1.075h2.025q-.075.825-.287 1.6-.213.775-.538 1.5Z"/>
    </Icon>
  );
});

IconMaterialHistoryToggleOff.displayName = 'AmauiIconMaterialHistoryToggleOff';

export default IconMaterialHistoryToggleOff;
