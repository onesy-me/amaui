import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactlessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessW100Filled'

      short_name='Contactless'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.2 13.8q.125-.425.188-.888.062-.462.062-.912t-.062-.913q-.063-.462-.188-.887l-.65.3q.075.35.138.738.062.387.062.762t-.062.762q-.063.388-.138.738Zm3.25 1.35q.275-.75.388-1.538.112-.787.112-1.612 0-.825-.112-1.613-.113-.787-.388-1.537l-.65.25q.225.675.337 1.412.113.738.113 1.488t-.113 1.488q-.112.737-.337 1.412Zm3.25 1.35q.375-1.05.563-2.188.187-1.137.187-2.312 0-1.175-.187-2.312Q15.075 8.55 14.7 7.5l-.65.3q.35.975.525 2.037.175 1.063.175 2.163 0 1.1-.175 2.162-.175 1.063-.525 2.038ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialContactlessW100Filled.displayName = 'AmauiIconMaterialContactlessW100Filled';

export default IconMaterialContactlessW100Filled;
