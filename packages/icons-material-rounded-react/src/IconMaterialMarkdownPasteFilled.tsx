import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkdownPasteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownPasteFilled'

      short_name='MarkdownPaste'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120q-17 0-28.5-11.5T480-160v-240q0-33 23.5-56.5T560-480h240q33 0 56.5 23.5T880-400v240q0 17-11.5 28.5T840-120q-17 0-28.5-11.5T800-160v-240h-80v160q0 17-11.5 28.5T680-200q-17 0-28.5-11.5T640-240v-160h-80v240q0 17-11.5 28.5T520-120Zm-320 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v160q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-160h-80v80q0 17-11.5 28.5T640-640H320q-17 0-28.5-11.5T280-680v-80h-80v560h160q17 0 28.5 11.5T400-160q0 17-11.5 28.5T360-120H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialMarkdownPasteFilled.displayName = 'OnesyIconMaterialMarkdownPasteFilled';

export default IconMaterialMarkdownPasteFilled;
