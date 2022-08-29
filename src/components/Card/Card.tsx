import React from 'react';
import './card.scss';

type Props = {
    className?: string,
    children: any
}

export default function Card({ className = '', children }: Props): JSX.Element {
    return (
        <div className={`card ${className}`} >
            {children}
        </div>
    );
}
