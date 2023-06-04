import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomPreferencesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferencesW100'

      short_name='RoomPreferences'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V5.05q0-.325.212-.538.213-.212.538-.212h5.9q.325 0 .538.212.212.213.212.538v.25h1.95q.325 0 .537.212.213.213.213.538v5h-.7V6h-2v6.6h-.7V5h-6v14h4.7v.7Zm12.4.45q-.175 0-.262-.112-.088-.113-.113-.263l-.025-.3q-.65-.125-1.05-.375t-.75-.625l-.3.15q-.125.075-.275.05-.15-.025-.25-.15t-.075-.3q.025-.175.15-.275l.275-.2q-.225-.6-.225-1.15 0-.55.225-1.15l-.275-.2q-.125-.1-.15-.275-.025-.175.075-.3t.25-.15q.15-.025.275.05l.3.15q.35-.375.75-.625t1.05-.375l.025-.3q.025-.15.125-.263.1-.112.25-.112.175 0 .262.1.088.1.113.275l.025.3q.65.125 1.05.375t.75.625l.3-.15q.125-.075.275-.05.15.025.25.15t.075.3q-.025.175-.15.275l-.275.2q.225.6.225 1.15 0 .55-.225 1.15l.275.2q.125.1.15.275.025.175-.075.3t-.25.15q-.15.025-.275-.05l-.3-.15q-.35.375-.75.625t-1.05.375l-.025.3q-.025.15-.125.263-.1.112-.25.112Zm0-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Zm-6.05-6.1q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-4 6.3V5v14Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferencesW100.displayName = 'AmauiIconMaterialRoomPreferencesW100';

export default IconMaterialRoomPreferencesW100;
