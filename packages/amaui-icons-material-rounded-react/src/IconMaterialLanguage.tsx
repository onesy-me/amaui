import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Language'

      short_name='Language'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm3.95-14h2.95q-.725-1.25-1.813-2.175Q16 4.9 14.6 4.45q.45.825.788 1.712.337.888.562 1.838ZM10.1 8h3.8q-.3-1.1-.775-2.075Q12.65 4.95 12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5.85 6h3.4q-.075-.5-.113-.988Q7.5 12.525 7.5 12t.037-1.012q.038-.488.113-.988h-3.4q-.125.5-.188.988Q4 11.475 4 12t.062 1.012q.063.488.188.988Zm5.15 5.55q-.45-.825-.787-1.713Q8.275 16.95 8.05 16H5.1q.725 1.25 1.812 2.175Q8 19.1 9.4 19.55ZM5.1 8h2.95q.225-.95.563-1.838.337-.887.787-1.712Q8 4.9 6.912 5.825 5.825 6.75 5.1 8ZM12 19.95q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075.475.975 1.125 1.875ZM9.65 14h4.7q.075-.5.113-.988.037-.487.037-1.012t-.037-1.012q-.038-.488-.113-.988h-4.7q-.075.5-.112.988Q9.5 11.475 9.5 12t.038 1.012q.037.488.112.988Zm4.95 5.55q1.4-.45 2.487-1.375Q18.175 17.25 18.9 16h-2.95q-.225.95-.562 1.837-.338.888-.788 1.713ZM16.35 14h3.4q.125-.5.188-.988Q20 12.525 20 12t-.062-1.012q-.063-.488-.188-.988h-3.4q.075.5.112.988.038.487.038 1.012t-.038 1.012q-.037.488-.112.988Z"/>
    </Icon>
  );
});

IconMaterialLanguage.displayName = 'AmauiIconMaterialLanguage';

export default IconMaterialLanguage;
