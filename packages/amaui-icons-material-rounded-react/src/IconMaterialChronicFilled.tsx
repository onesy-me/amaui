import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChronicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChronicFilled'

      short_name='Chronic'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 520V376q0-17-11.5-28.5T440 336q-17 0-28.5 11.5T400 376v160q0 8 3 15t9 13l80 80q12 12 28 12t28-12q12-12 12-28t-12-28l-68-68ZM363 888q-122-26-202.5-124T80 536q0-150 105-255t255-105q150 0 255 105t105 255q0 43-10 83.5T762 696H518q-66 0-112 47t-46 113q0 8 .5 16t2.5 16Zm157 48h240q33 0 56.5-23.5T840 856q0-33-23.5-56.5T760 776H520q-33 0-56.5 23.5T440 856q0 33 23.5 56.5T520 936Zm0-40q-17 0-28.5-11.5T480 856q0-17 11.5-28.5T520 816q17 0 28.5 11.5T560 856q0 17-11.5 28.5T520 896Zm120 0q-17 0-28.5-11.5T600 856q0-17 11.5-28.5T640 816q17 0 28.5 11.5T680 856q0 17-11.5 28.5T640 896Zm120 0q-17 0-28.5-11.5T720 856q0-17 11.5-28.5T760 816q17 0 28.5 11.5T800 856q0 17-11.5 28.5T760 896Z"/>
    </Icon>
  );
});

IconMaterialChronicFilled.displayName = 'AmauiIconMaterialChronicFilled';

export default IconMaterialChronicFilled;
