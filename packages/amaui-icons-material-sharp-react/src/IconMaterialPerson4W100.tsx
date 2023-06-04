import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerson4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person4W100'

      short_name='Person4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.2q-1.125 0-1.912-.788Q9.3 10.625 9.3 9.5V6.975q0-.425.288-.725.287-.3.712-.3.275 0 .488.125.212.125.362.325.15-.2.363-.325.212-.125.487-.125t.488.125q.212.125.362.325.15-.2.363-.325.212-.125.487-.125.425 0 .713.3.287.3.287.725V9.5q0 1.125-.787 1.912-.788.788-1.913.788Zm0-.7q.825 0 1.413-.588Q14 10.325 14 9.5V7h-4v2.5q0 .825.588 1.412.587.588 1.412.588Zm-6.7 7.7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 14.8 12 14.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Zm.7-.7h12v-.6q0-.35-.237-.662-.238-.313-.663-.538-1.2-.575-2.487-.888Q13.325 15.5 12 15.5t-2.613.312Q8.1 16.125 6.9 16.7q-.425.225-.662.538Q6 17.55 6 17.9Zm6 0ZM12 7Z"/>
    </Icon>
  );
});

IconMaterialPerson4W100.displayName = 'AmauiIconMaterialPerson4W100';

export default IconMaterialPerson4W100;
