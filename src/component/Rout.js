import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import HomeFeed from './HomeFeed';
import Empty from './Empty';
import App from './Picture/App';
import App2 from './videos/App2';
import App3 from './Giphy/App3';

const Rout = () => {
    return ( 
        <div>
            <HomeFeed />
            <div className="ui containert">
            <Switch>
                <Route path= "/" exact component={Empty} />
                <Route path= "/Picture" exact component={App} />
                <Route path= "/Video" exact component={App2} />
                <Route path= "/Gif" exact component={App3} />

                <Redirect to= "/"  />
            </Switch>
            </div>
          </div>
     );
}
 
export default Rout;