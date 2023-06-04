import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFemurW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurW100Filled'

      short_name='Femur'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 20.8q-.625 0-1.1-.4-.475-.4-.6-1.025-.175-.975-.8-1.525-.625-.55-1.55-.55-.125 0-.262.012-.138.013-.263.038-.8.15-1.425-.375t-.625-1.325q0-.625.4-1.1.4-.475 1.025-.6l3.5-.6 3.625-5.2q.3-.45.25-.9-.05-.45-.425-.8-.2-.2-.275-.438-.075-.237-.075-.437 0-.5.313-.825.312-.325.812-.325.325 0 .587.112.263.113.413.238.2.125.65.35.45.225 1.175.25-.2-.575.038-1.125.237-.55.787-.75.575-.2 1.125.05t.75.825l1.25 3.5q.2.575-.05 1.1-.25.525-.8.725-.575.225-1.112-.063Q16.7 9.35 16.5 8.8q-.375-.05-.738.087-.362.138-.612.463l-4.175 6 .625 3.425q.15.8-.375 1.413-.525.612-1.325.612Zm0-.7q.475 0 .788-.362.312-.363.212-.838l-.6-3.325q-.05-.2 0-.387.05-.188.175-.363l4.1-5.875q.275-.4.713-.625.437-.225.937-.225l-.725-2q-.75 0-1.375-.2T13 5.35q-.175-.125-.312-.175-.138-.05-.263-.05-.2 0-.312.137Q12 5.4 12 5.575q0 .1.038.2.037.1.112.175.325.325.475.7.15.375.15.75 0 .325-.1.6-.1.275-.275.55l-3.575 5.125q-.125.175-.287.263-.163.087-.363.137l-3.35.575q-.375.075-.612.362-.238.288-.238.638 0 .475.375.788.375.312.85.212.175-.05.337-.05h.313q.575 0 1.088.188.512.187.912.537.4.35.675.825t.375 1.1q.075.375.362.613.288.237.638.237Zm0 0q-.35 0-.638-.237-.287-.238-.362-.613-.2-1.225-1.037-1.938-.838-.712-2.013-.712h-.313q-.162 0-.337.05-.475.1-.85-.212-.375-.313-.375-.788 0-.35.238-.638.237-.287.612-.362l3.35-.575q.2-.05.363-.137.162-.088.287-.263L12.4 8.55q.175-.275.275-.55.1-.275.1-.6 0-.375-.15-.75t-.475-.7q-.075-.075-.112-.175-.038-.1-.038-.2 0-.175.113-.313.112-.137.312-.137.125 0 .263.05.137.05.312.175.5.35 1.125.55.625.2 1.375.2l.725 2q-.5 0-.937.225-.438.225-.713.625l-4.1 5.875q-.125.175-.175.363-.05.187 0 .387l.6 3.325q.1.475-.212.838-.313.362-.788.362Z"/>
    </Icon>
  );
});

IconMaterialFemurW100Filled.displayName = 'AmauiIconMaterialFemurW100Filled';

export default IconMaterialFemurW100Filled;
