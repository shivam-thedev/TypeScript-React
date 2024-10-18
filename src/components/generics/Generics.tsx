import React, { Fragment, ReactNode } from 'react';

type ListProps<Item> = {
    data: Item[],
    getKey: (item: Item) => React.Key,
    getRow: (item: Item) => ReactNode
}

export const Generics = <ItemType,>({ data, getKey, getRow }: ListProps<ItemType>) => {
    return (
        <>
            {data.map(item => (
                <Fragment key={getKey(item)}>
                    {getRow(item)}
                </Fragment>
            ))}
        </>
    );
}

// export default function Generics() {
//     return (
        
//     );
// }

