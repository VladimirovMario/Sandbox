const firstTooltipConfigurations = {
    text: 'Some text',
    positions: { top: '38px', left: '44%' },
    padding: '8px',
    color: '#273658',
    backgroundColor: '#c7cfe2',
    borderRadius: '4.5rem',
    boxShadow: '0 0 3rem 0 #c7cfe2',
    border: '2px solid #c7cfe2',
    fontSize: '1.6rem',
};

const secondTooltipConfigurations = {
    margin: '0',
    text: 'Very important text!',
    positions: { bottom: '0px', left: '10px' },
    padding: '8px',
    color: '#273658',
    backgroundColor: '#c7cfe2',
    borderRadius: '1rem',    
    boxShadow: '0 0 3rem 0 #c7cfe2',
    fontSize: '1.6rem',
};

const directions = {
    top: 'top',
    topStart: 'top-start',
    topEnd: 'top-end',
    right: 'right',
    rightStart: 'right-start',
    rightEnd: 'right-end',
    bottom: 'bottom',
    bottomStart: 'bottom-start',
    bottomEnd: 'bottom-end',
    left: 'left',
    leftStart: 'left-start',
    leftEnd: 'left-end',
};
export { firstTooltipConfigurations, secondTooltipConfigurations, directions };
