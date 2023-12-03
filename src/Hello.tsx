import { FC } from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    // Handle '<>' correctly too
    return <>
        <div className={'Hello'}>
            <h1>Hello React</h1>
        </div>
    </>;
}
