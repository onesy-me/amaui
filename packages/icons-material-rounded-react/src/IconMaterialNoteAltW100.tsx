import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltW100'

      short_name='NoteAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h194q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h194q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm248-580q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM200-200v-560 560Zm135-120h1q6 0 11-2t10-7l227-225-30-30-225 225q-5 5-7 10t-2 11v3q0 6 4.5 10.5T335-320Zm269-254 30-30q6-6 6-14t-6-14l-2-2q-6-6-14-6t-14 6l-30 30 30 30Z"/>
    </Icon>
  );
});

IconMaterialNoteAltW100.displayName = 'OnesyIconMaterialNoteAltW100';

export default IconMaterialNoteAltW100;
