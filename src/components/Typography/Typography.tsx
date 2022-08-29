import React from 'react';
import { TypographySize, TypographyIconSize, Color, Weight } from 'types/index';
import './typography.scss';

type Props = {
    className?: string,
    component?: string,
    children: any,
    color?: Color | string,
    size?: TypographySize,
    weight?: Weight,
    iconLeft?: any,
    iconRight?: any,
    iconLeftSize?: TypographyIconSize,
    iconRightSize?: TypographyIconSize,
    props?: any
}

export default function Typography({
    component,
    className = '',
    color = 'base',
    size = 14,
    weight = 'regular',
    iconLeft,
    iconRight,
    iconLeftSize = 'sm',
    iconRightSize = 'sm',
    children,
    ...props
}: Props): JSX.Element {
    const Component = component ? 'span' : 'p';

    return (
        <Component {...props} className={`typography ${iconLeft || iconRight ? 'd-flex align-items-center' : ''} size-${size} color-${color} weight-${weight} ${className}`} >
            {iconLeft && <img src={iconLeft} className={`typography-icon size-${iconLeftSize} mr-2`} alt='typography-icon-left' />}
            {children}
            {iconRight && <img src={iconRight} className={`typography-icon size-${iconRightSize} mr-2`} alt='typography-icon-right' />}
        </Component>
    );
}
