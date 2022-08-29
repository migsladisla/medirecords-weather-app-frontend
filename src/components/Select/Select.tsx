import React from 'react';
import Select from 'react-select';
import Typography from '../Typography';
import { Placeholder, DropdownIndicator } from './InputConfig';

import './select.scss';

type Props = {
    className?: string;
    wrapperClassName?: string;
    options: Array<Object>;
    handleOnChange?: (val: any) => void;
    size?: 'sm' | 'lg';
    label?: string;
    value?: object;
    isInvalid?: boolean;
}

export default function AppSelect({ className = '', wrapperClassName = '', handleOnChange, options, size = 'lg', label, value, isInvalid }: Props): JSX.Element {
    return (
        <div className={`${wrapperClassName} select-group`}>
            {label && <Typography className='label' size={12} color='bluish-gray'>{label}</Typography>}
            <Select
                classNamePrefix='select'
                className={`select size-${size} ${className || ''} ${isInvalid ? 'is-invalid' : ''}`}
                options={options}
                isDisabled={false}
                value={value}
                getOptionValue={(option: any) => option.label}
                defaultValue={options.find((c: any) => c.key === '10')}
                components={{ Placeholder, DropdownIndicator, IndicatorSeparator: () => null }}
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} />
        </div>

    );
}
