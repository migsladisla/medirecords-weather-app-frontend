import React, { forwardRef } from 'react';
import { Dropdown as BootstrapDropdown, DropdownProps } from 'react-bootstrap';
import './drop-down.scss';

interface Props extends DropdownProps {
    className?: string;
    toggle: any;
    children: any;
    strategy?: 'fixed' | 'absolute'
}

export default function DropDown({ className = '', toggle, strategy = 'fixed', children, ...rest }: Props): JSX.Element {
    return (
        <div className={`drop-down ${className}`} >
            <BootstrapDropdown {...rest}>
                <BootstrapDropdown.Toggle as={CustomToggle}>
                    {toggle}
                </BootstrapDropdown.Toggle>

                <BootstrapDropdown.Menu popperConfig={{ strategy: strategy === 'fixed' ? 'fixed' : 'absolute' }}>
                    {children}
                </BootstrapDropdown.Menu>
            </BootstrapDropdown>
        </div>
    );
}

DropDown.Item = BootstrapDropdown.Item;
DropDown.Divider = BootstrapDropdown.Divider;

const CustomToggle = forwardRef<HTMLDivElement>(({ children, onClick }: any, ref) => {
    const handleClick = (e: any) => {
        onClick(e);
    };

    return (
        <div ref={ref} onClick={handleClick}>
            {children}
        </div>
    );
});
