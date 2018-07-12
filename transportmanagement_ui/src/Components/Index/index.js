
import React, { Component } from 'react';

import {Card,CardTitle,CardMenu,CardActions,Button,IconButton,CardText,Grid,Cell} from 'react-mdl'
class index extends Component {
    render() {
        return (
            <div>
            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '550px', background: 'url(http://www.monterglobal.com//wp-content/uploads/2017/03/fad303c6-182f-4ab4-a7f5-e1ede5c72d98.jpg) center / cover'}}><span className="logo"><h1>TRAVERSE-LOGISTICS</h1></span></CardTitle>
            <CardText>
                All in one dispatch solutions
            </CardText>
            <CardActions border>
                <Button colored></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        {/* <Grid className="Home-grid">
        <Cell col={4}><img  className="imgs" src="https://static.fortytwo.com/assets/wp-content/uploads/2016/09/05140719/2_way_messaging-02.png"/>
        <div>Two way messaging</div>
        </Cell>
        <Cell col={4}><img  className="imgs" src="http://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Google-Maps-icon.png"/></Cell>
        <Cell col={4}>
        <img  className="imgs" src="https://png.icons8.com/ultraviolet/1600/todo-list"/>
        
        </Cell>
        
    </Grid> */}
    

    
    </div>
        );
    }
}

export default index;