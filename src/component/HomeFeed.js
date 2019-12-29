import React from 'react';
import { Link } from 'react-router-dom';

const HomeFeed = () => {
    return ( 
        <div className="ui text container">
            <h1 className="ui centered  header"> API-Practice </h1>
            <h2 className="ui centered header">Do whatever you want when you want to.</h2>
            <Link className="ui huge primary button"  to="/Picture"> Search Picture <i className="right arrow icon"></i></Link>
            <Link className="ui huge primary button"  to="/Video"> Search Video <i className="right arrow icon"></i></Link>
            <Link className="ui huge primary button"  to="/Gif"> Search Gif <i className="right arrow icon"></i></Link>
      </div>
     );
}
 
export default HomeFeed;