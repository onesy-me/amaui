import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShuffleOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOn'

      short_name='ShuffleOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40q-33 0-56.5-23.5T40-120v-720q0-33 23.5-56.5T120-920h720q33 0 56.5 23.5T920-840v720q0 33-23.5 56.5T840-40H120Zm480-120h160q17 0 28.5-11.5T800-200v-160q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v62l-97-97q-12-12-28.5-12T566-395q-12 12-12.5 28t11.5 28l99 99h-64q-17 0-28.5 11.5T560-200q0 17 11.5 28.5T600-160Zm-428-12q11 11 28 11t28-11l492-492v64q0 17 11.5 28.5T760-560q17 0 28.5-11.5T800-600v-160q0-17-11.5-28.5T760-800H600q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720h64L172-228q-11 11-11 28t11 28Zm-1-560 168 167q11 11 28 11t28-11q12-12 11.5-28.5T395-621L227-788q-12-11-28.5-11T171-788q-11 11-11 28t11 28Z"/>
    </Icon>
  );
});

IconMaterialShuffleOn.displayName = 'OnesyIconMaterialShuffleOn';

export default IconMaterialShuffleOn;
