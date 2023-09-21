import { Children, ReactElement, cloneElement, useState } from 'react';

const style = {
  notSelected: `border-b text-sm`,
  selected: `text-gray-700 text-sm border-b-2 border-indigo-700 `,
  default: `-mb-2 px-4 md:px-8 py-4 md:py-1 inline-block focus:outline-none`,
  tab: `mt-4`,
};

export function Tabs({ children }: { children: React.ReactNode[] }) {
  const childrenArray = Children.toArray(children) as ReactElement[];
  const [current, setCurrent] = useState(childrenArray[0].key);

  const newChildren = childrenArray.map((child) =>
    cloneElement(child, { selected: child?.key === current }),
  );

  return (
    <nav>
      {childrenArray.map((child) => (
        <div
          role='link'
          tabIndex={0}
          onClick={() => setCurrent(child?.key)}
          key={child?.key}
          className={`${style.default} 
            ${current === child?.key ? style.selected : style.notSelected}`}
        >
          {child?.props.title}
        </div>
      ))}
      <section>{newChildren}</section>
    </nav>
  );
}

export function Tab({
  children,
  selected,
}: {
  children: React.ReactNode;
  selected: boolean;
}) {
  return (
    <div hidden={!selected} className={style.tab}>
      {children}
    </div>
  );
}
