import React from 'react';
import {  List } from 'semantic-ui-react'

function UserItem({titlu, descriere, color}) {
 

    
    return (
       
        
        <List.Item style={{color: color}} >
          <List.Icon name='angle double right' />
          <List.Content >
            <List.Header >{titlu}</List.Header>
            <List.Description>
              {descriere}
            </List.Description>
          </List.Content>
        </List.Item>
     
           
    );
}

export default UserItem;