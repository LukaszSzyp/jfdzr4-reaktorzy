
import './AppWrapper.css'

export function AppWrapper ({children}) {
    return <div className={'app-wrapper'} >
        {children}
    </div>
}