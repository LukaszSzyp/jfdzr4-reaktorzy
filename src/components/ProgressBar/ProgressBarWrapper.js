
export const ProgressBarWrapper = (props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '80px',
            backgroundColor: 'lightgrey',
        }}>
            {props.children}
        </div>
    )
}