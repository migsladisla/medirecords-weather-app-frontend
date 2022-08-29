import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Typography from '../Typography';
import { ButtonSize, ButtonVariant, TypographySize, Weight } from 'types';
import './button.scss';

type Props = {
    variant?: ButtonVariant,
    className?: string,
    weight?: Weight,
    onClick?: () => void,
    children?: JSX.Element | string,
    iconLeft?: any,
    iconRight?: any,
    iconSize?: number,
    buttonSize?: ButtonSize,
    isProcessing?: boolean,
    /**
        This is a label
     */
    label: string | JSX.Element,
    labelSize?: TypographySize,
    textColor?: string,
}

export default function Button({
    variant = 'primary', label, className = '', onClick, iconLeft: IconLeft, iconRight: IconRight, children,
    iconSize, buttonSize = 'md', isProcessing, labelSize = 14, textColor, weight, ...rest
}: Props & ButtonProps): JSX.Element {
    return (
        <BootstrapButton
            variant={variant}
            className={`button ${className} size-${buttonSize}`}
            onClick={onClick}
            {...rest}>
            {isProcessing && (
                <Spinner
                    animation='border'
                    role='status'
                    variant={/light|link/.test(variant || '') ? 'dark' : 'light'}
                    className='button__spinner'
                    size='sm' />
            )}

            {IconLeft}

            <Typography
                color={textColor || (/outline-/.test(variant)
                    ? variant.replace('outline-', '')
                    : /light|link/.test(variant) ? 'bluish-gray' : 'white')}
                size={labelSize}
                weight={weight || (/link/.test(variant) ? 'regular' : 'semi-bold')} >
                {label}
            </Typography>
            {children}

            {IconRight}
        </BootstrapButton>
    );
}
