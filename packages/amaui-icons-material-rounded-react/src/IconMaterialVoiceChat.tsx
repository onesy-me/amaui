import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceChat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChat'

      short_name='VoiceChat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q.325 0 .538-.213.212-.212.212-.537v-8.5q0-.325-.212-.537Q12.325 5 12 5q-.325 0-.537.213-.213.212-.213.537v8.5q0 .325.213.537.212.213.537.213Zm-2.75-2q.325 0 .538-.213.212-.212.212-.537v-4.5q0-.325-.212-.537Q9.575 7 9.25 7q-.325 0-.537.213-.213.212-.213.537v4.5q0 .325.213.537.212.213.537.213Zm-2.5-2q.325 0 .537-.213.213-.212.213-.537v-.5q0-.325-.213-.538Q7.075 9 6.75 9q-.325 0-.537.212Q6 9.425 6 9.75v.5q0 .325.213.537.212.213.537.213Zm8 2q.325 0 .538-.213.212-.212.212-.537v-4.5q0-.325-.212-.537Q15.075 7 14.75 7q-.325 0-.537.213Q14 7.425 14 7.75v4.5q0 .325.213.537.212.213.537.213Zm2.5-2q.325 0 .538-.213.212-.212.212-.537v-.5q0-.325-.212-.538Q17.575 9 17.25 9q-.325 0-.538.212-.212.213-.212.538v.5q0 .325.212.537.213.213.538.213ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Zm2-2.4L5.175 16H20V4H4ZM4 4v13.175Z"/>
    </Icon>
  );
});

IconMaterialVoiceChat.displayName = 'AmauiIconMaterialVoiceChat';

export default IconMaterialVoiceChat;
