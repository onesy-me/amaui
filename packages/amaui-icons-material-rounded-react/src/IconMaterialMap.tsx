import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Map'

      short_name='Map'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 20.775 9 18.9l-4.65 1.8q-.5.2-.925-.113Q3 20.275 3 19.75v-14q0-.325.188-.575.187-.25.512-.375l4.65-1.575q.325-.1.65-.113.325-.012.65.113L15 5.1l4.65-1.8q.5-.2.925.112.425.313.425.838v14q0 .325-.188.575-.187.25-.512.375l-4.65 1.575q-.325.1-.65.112-.325.013-.65-.112ZM14 18.55V6.85l-4-1.4v11.7Zm2 0 3-1V5.7l-3 1.15ZM5 18.3l3-1.15V5.45l-3 1ZM16 6.85v11.7Zm-8-1.4v11.7Z"/>
    </Icon>
  );
});

IconMaterialMap.displayName = 'AmauiIconMaterialMap';

export default IconMaterialMap;
