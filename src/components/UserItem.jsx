import React from 'react';
import { Image, List, Button } from 'semantic-ui-react'


function UserItem(props) {
    const {name, email, isGoldClient, image, salary} = props;
   

   
    
    
    return (
       
            <List.Item>
           <Button compact color="red" floated="right">Delete</Button>  
            <List.Content floated='right'>
                { isGoldClient
                    ? "Gold Client"
                    : null
                }
               
            
             </List.Content>
           
            <Image avatar src={image} />
            <List.Content>
                <List.Header>{name}</List.Header>
                {email} 
                <br />
                Salariu:  {salary}  lei
             
            </List.Content>
            </List.Item>
     
           
    );
}

export default UserItem;