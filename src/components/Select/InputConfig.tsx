import { MdExpandMore } from 'react-icons/md';
import { components } from 'react-select';

// -------- react-select config -------- //
export const Placeholder = (props: any) => {
    return <components.Placeholder {...props} />;
};

export const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <MdExpandMore color='#999ED0' />
        </components.DropdownIndicator>
    );
};

export const selectCustomStyles = {
    control: (base: any) => ({
        ...base,
        height: '44px',
        minHeight: '44px'
    })
};
