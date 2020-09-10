import React from 'react';
import {  List } from 'semantic-ui-react'

function UserItem({titlu, descriere}) {
 

    
    return (
       
        
        <List.Item>
          <List.Icon name='angle double right' />
          <List.Content>
            <List.Header as='a'>{titlu}</List.Header>
            <List.Description>
              {descriere}
            </List.Description>
          </List.Content>
        </List.Item>
     
           
    );
}

export default UserItem;