
import { Switch, Route} from 'react-router-dom';
import { ContentStyle } from './styled';
import { Home } from '../home/index';
import { History } from '../history/History';
import { EcoActions } from '../ecoActions/EcoActions';


export const Content = () => (
    <Switch>
         <Route path='/' exact>
            <ContentStyle>
                <Home />
            </ContentStyle>
        </Route>
        <Route path="/history">
            <History/>
        </Route>
        <Route path="/eco-actions">
            <EcoActions/>
        </Route>
    </Switch>

)

