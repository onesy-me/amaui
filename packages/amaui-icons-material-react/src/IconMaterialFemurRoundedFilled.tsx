import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFemurRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurRoundedFilled'
      short_name='Femur'

      {...props}
    >
      <path d="M9.9 22.075q-1.1 0-1.925-.688Q7.15 20.7 6.95 19.6q-.075-.45-.337-.738-.263-.287-.763-.287-.075 0-.15.012-.075.013-.125.013-1.4.275-2.488-.638Q2 17.05 2 15.625q0-1.05.688-1.9.687-.85 1.812-1.05l2.95-.525 3.325-4.775q-.35-.35-.55-.825-.2-.475-.2-.975 0-1.05.7-1.763.7-.712 1.725-.712.65 0 1.1.237.45.238.65.388.225.175.513.25.287.075.637.1.2-.625.638-1.1.437-.475 1.037-.7 1.1-.425 2.125.062 1.025.488 1.425 1.538L21.85 7.4q.425 1.15-.1 2.162-.525 1.013-1.5 1.338-.9.3-1.725.062-.825-.237-1.375-.862h-.925l-3.875 5.525.525 2.9q.275 1.4-.637 2.475-.913 1.075-2.338 1.075Zm0-2q.475 0 .788-.363.312-.362.212-.812l-.6-3.325q-.05-.2 0-.387.05-.188.175-.363l4.1-5.875q.275-.4.713-.625.437-.225.937-.225l-.725-2q-.75.025-1.375-.175-.625-.2-1.125-.575-.175-.125-.3-.188-.125-.062-.25-.062-.2 0-.313.15-.112.15-.112.325 0 .1.037.2.038.1.088.175.325.325.475.687.15.363.15.738 0 .325-.087.612-.088.288-.288.563l-3.575 5.125q-.125.175-.287.263-.163.087-.363.137l-3.35.575q-.35.05-.587.338-.238.287-.238.637 0 .5.375.8.375.3.825.225.175-.05.337-.063.163-.012.313-.012.575 0 1.088.187.512.188.912.538.4.35.675.837.275.488.375 1.113.075.35.362.587.288.238.638.238Zm0 0q-.35 0-.638-.238-.287-.237-.362-.587-.2-1.25-1.037-1.962-.838-.713-2.013-.713-.15 0-.313.012-.162.013-.337.063-.45.075-.825-.225-.375-.3-.375-.8 0-.35.238-.637.237-.288.587-.338l3.35-.575q.2-.05.363-.137.162-.088.287-.263L12.4 8.55q.2-.275.288-.563.087-.287.087-.612 0-.375-.15-.738-.15-.362-.475-.687-.05-.075-.088-.175-.037-.1-.037-.2 0-.175.112-.325.113-.15.313-.15.125 0 .25.062.125.063.3.188.5.375 1.125.575.625.2 1.375.175l.725 2q-.5 0-.937.225-.438.225-.713.625l-4.1 5.875q-.125.175-.175.363-.05.187 0 .387l.6 3.325q.1.45-.212.812-.313.363-.788.363Z"/>
    </Icon>
  );
});

IconMaterialFemurRoundedFilled.displayName = 'AmauiIconMaterialFemurRoundedFilled';

export default IconMaterialFemurRoundedFilled;
