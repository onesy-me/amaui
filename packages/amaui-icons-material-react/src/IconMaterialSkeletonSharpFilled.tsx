import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkeletonSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkeletonSharpFilled'
      short_name='Skeleton'

      {...props}
    >
      <path d="M12 22q-1.125 0-1.962-.238-.838-.237-1.888-.887l-2.725-1.75q-.725-.45-1.075-1.163Q4 17.25 4 16.475q0-1.725 1.2-2.6T7.8 13q.725 0 1.413.238.687.237 1.237.712.125.125.263.2.137.075.287.15v-1.8q-1.275-.075-2.375-.3-1.1-.225-1.9-.6-.8-.375-1.262-.888Q5 10.2 5 9.525q0-.5.35-.938.35-.437.975-.812-.15-.225-.237-.488Q6 7.025 6 6.725q0-.525.412-1.013.413-.487 1.138-.862-.05-.125-.05-.225V4.4q0-.65.688-1.138Q8.875 2.775 10 2.5v1.525q-.35.125-.587.237-.238.113-.363.238.125.125.563.287.437.163 1.387.238V2h2v3.025q.95-.075 1.388-.238.437-.162.562-.287-.125-.1-.35-.213-.225-.112-.575-.237V2.5q1.125.275 1.8.775T16.5 4.4l-.05.45q.725.375 1.137.85.413.475.413 1.025 0 .3-.087.562-.088.263-.238.488.625.375.975.812.35.438.35.938 0 .675-.462 1.187-.463.513-1.263.888-.8.375-1.9.6-1.1.225-2.375.3v1.8q.15-.075.288-.15.137-.075.262-.2.55-.475 1.238-.712Q15.475 13 16.2 13q1.4 0 2.6.887 1.2.888 1.2 2.613 0 .775-.35 1.487-.35.713-1.075 1.163l-2.725 1.725q-1.05.65-1.887.887Q13.125 22 12 22Zm-1-11V9.5q-.975-.05-1.837-.225Q8.3 9.1 7.65 8.8q-.575.25-.838.462-.262.213-.312.313.05.275 1.088.788Q8.625 10.875 11 11Zm-2.75 6.5q.3 0 .525-.225Q9 17.05 9 16.75q0-.3-.225-.525Q8.55 16 8.25 16q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225ZM11 8V6.525q-.675-.05-1.275-.188-.6-.137-1.05-.337-.575.225-.85.437-.275.213-.325.313.025.35.9.737.875.388 2.6.513Zm2 3q2.375-.125 3.413-.637 1.037-.513 1.087-.788-.05-.1-.3-.313-.25-.212-.825-.462-.65.3-1.512.475Q14 9.45 13 9.5Zm0-3q1.725-.125 2.6-.513.875-.387.9-.737-.05-.075-.288-.287-.237-.213-.862-.463-.45.225-1.05.35-.6.125-1.3.175Zm2.75 9.5q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q16.05 16 15.75 16q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Z"/>
    </Icon>
  );
});

export default IconMaterialSkeletonSharpFilled;
