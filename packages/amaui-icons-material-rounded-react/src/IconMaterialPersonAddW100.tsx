import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddW100'

      short_name='PersonAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.675 13.35q-.15 0-.25-.1t-.1-.25v-2.65h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V13q0 .15-.1.25t-.25.1Zm-10-2.15q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q7.55 5.8 8.675 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-5.95 7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.337-1.037.338-.488.913-.763 1.375-.65 2.738-.975 1.362-.325 2.712-.325t2.712.325q1.363.325 2.738.975.575.275.913.763.337.487.337 1.037v.55q0 .325-.212.537-.213.213-.538.213Zm-.05-.7h12v-.6q0-.35-.237-.662-.238-.313-.663-.538-1.2-.575-2.487-.888Q10 14.5 8.675 14.5t-2.613.312q-1.287.313-2.487.888-.425.225-.662.538-.238.312-.238.662Zm6-7q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.412Q9.5 6.5 8.675 6.5q-.825 0-1.412.588-.588.587-.588 1.412t.588 1.412q.587.588 1.412.588Zm0-2Zm0 6Z"/>
    </Icon>
  );
});

IconMaterialPersonAddW100.displayName = 'AmauiIconMaterialPersonAddW100';

export default IconMaterialPersonAddW100;
