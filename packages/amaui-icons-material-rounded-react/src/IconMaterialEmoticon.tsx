import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmoticon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Emoticon'

      short_name='Emoticon'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M260 776q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320 716q0 26-17.5 43T260 776Zm0-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320 436q0 26-17.5 43T260 496Zm180 120q-17 0-28.5-11.5T400 576q0-17 11.5-28.5T440 536h80q17 0 28.5 11.5T560 576q0 17-11.5 28.5T520 616h-80Zm240-40q0-54-14.5-104T623 380q-9-14-8-31t14-28q13-11 29-8.5t26 16.5q36 53 56 115.5T760 576q0 56-13.5 107T709 780q-8 15-24 19t-30-5q-14-9-17.5-25.5T642 737q18-37 28-77t10-84Z"/>
    </Icon>
  );
});

IconMaterialEmoticon.displayName = 'AmauiIconMaterialEmoticon';

export default IconMaterialEmoticon;
