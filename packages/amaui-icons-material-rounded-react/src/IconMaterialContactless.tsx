import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactless = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Contactless'

      short_name='Contactless'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.9 16.925q.425.175.813.013.387-.163.512-.563.35-1.05.513-2.138Q15.9 13.15 15.9 12q0-1.15-.162-2.238-.163-1.087-.513-2.137-.125-.4-.525-.575-.4-.175-.825.025-.35.15-.512.512-.163.363-.038.738.275.875.425 1.8.15.925.15 1.875t-.15 1.875q-.15.925-.425 1.8-.125.375.05.738.175.362.525.512Zm-3.225-1.3q.4.15.775-.012.375-.163.5-.538.225-.725.338-1.5Q12.4 12.8 12.4 12q0-.8-.112-1.575-.113-.775-.338-1.5-.125-.375-.5-.55-.375-.175-.775 0-.35.15-.525.512-.175.363-.05.788.175.575.238 1.15.062.575.062 1.175 0 .6-.062 1.175-.063.575-.238 1.15-.125.425.038.788.162.362.537.512Zm-3.25-1.375q.425.175.8 0 .375-.175.475-.6.1-.4.15-.813.05-.412.05-.837t-.05-.838q-.05-.412-.15-.812-.1-.425-.475-.6t-.8 0q-.35.125-.525.488-.175.362-.1.762.05.25.075.5.025.25.025.5t-.025.5q-.025.25-.075.5-.075.4.1.75t.525.5ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialContactless.displayName = 'AmauiIconMaterialContactless';

export default IconMaterialContactless;
