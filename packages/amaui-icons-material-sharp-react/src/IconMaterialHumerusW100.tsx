import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumerusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusW100'

      short_name='Humerus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 20.7q-.725 0-1.225-.512-.5-.513-.525-1.238.025-.35.15-.65.125-.3.375-.55l2.5-2.475V10.75q-.025-.65-.438-1.15-.412-.5-.962-.9Q8 8 7.65 7.362q-.35-.637-.35-1.337 0-1.175.813-1.95.812-.775 2.012-.775.65 0 1.2.162.55.163 1.05.513.15.1.3.175.15.075.3.075.4 0 .875-.45.375-.25.7-.363.325-.112.625-.112.65 0 1.087.437.438.438.438 1.088 0 .375-.15.712-.15.338-.425.638l-2.4 2.475v6.6l2.475 2.5q.25.25.387.562.138.313.138.663 0 .725-.5 1.213-.5.487-1.225.487-.35 0-.65-.125-.3-.125-.55-.375-.35-.35-.812-.538-.463-.187-.963-.187-.5 0-.963.187-.462.188-.812.538-.25.25-.55.387-.3.138-.65.138Zm-.025-.7q.2 0 .388-.087.187-.088.337-.213.425-.45 1.013-.7.587-.25 1.237-.25.625 0 1.213.25.587.25 1.037.7.125.125.325.213.2.087.4.087.425 0 .725-.312.3-.313.3-.738 0-.2-.087-.388-.088-.187-.213-.312l-2.375-2.35q-.175-.15-.25-.363Q13 15.325 13 15.1V8.825q0-.25.088-.463.087-.212.262-.387l2.3-2.3q.175-.175.263-.375.087-.2.087-.45 0-.375-.275-.625t-.65-.25q-.15 0-.3.037-.15.038-.275.138l-.925.6q-.125.075-.263.125-.137.05-.287.05-.2 0-.412-.063-.213-.062-.388-.187-.425-.35-1.037-.513Q10.575 4 10.15 4q-.9 0-1.525.575Q8 5.15 8 6.025q0 .725.425 1.225.425.5.925.925l1.125.9q.125-.625.375-1.113.25-.487.6-.812.05-.05.1-.063.05-.012.1-.012.15 0 .25.087.1.088.1.238 0 .075-.037.162-.038.088-.113.138l-.425.65Q11 9 11 10.425V15.1q0 .225-.075.437-.075.213-.25.363L8.3 18.25q-.15.125-.238.312-.087.188-.087.388 0 .425.312.738.313.312.738.312ZM12 11.975Z"/>
    </Icon>
  );
});

IconMaterialHumerusW100.displayName = 'AmauiIconMaterialHumerusW100';

export default IconMaterialHumerusW100;
