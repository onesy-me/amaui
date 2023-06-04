import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestRemoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestRemoteW100'

      short_name='NestRemote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 7q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6T12 7Zm0 14.2q-1.625 0-2.738-1.113Q8.15 18.975 8.15 17.35V6.15q0-1.6 1.125-2.725T12 2.3q1.6 0 2.725 1.125T15.85 6.15v11.2q0 1.625-1.112 2.737Q13.625 21.2 12 21.2Zm0-11.9q1.3 0 2.225-.925t.925-2.225q0-1.3-.925-2.225T12 3q-1.3 0-2.225.925T8.85 6.15q0 1.3.925 2.225T12 9.3Zm0 11.2q1.325 0 2.238-.925.912-.925.912-2.225V8.375q-.55.775-1.4 1.2Q12.9 10 12 10t-1.75-.425q-.85-.425-1.4-1.2v8.975q0 1.3.925 2.225T12 20.5Zm-1.35-5.1q-.275 0-.487-.212-.213-.213-.213-.488t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.488q-.213.212-.488.212Zm0-2.65q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm2.7 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm0 2.65q-.275 0-.487-.212-.213-.213-.213-.488t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.488q-.213.212-.488.212Zm-2.7 2.65q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm2.7 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialNestRemoteW100.displayName = 'AmauiIconMaterialNestRemoteW100';

export default IconMaterialNestRemoteW100;
