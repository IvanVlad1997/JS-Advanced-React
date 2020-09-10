import React from 'react';
import { List, Header, Icon } from 'semantic-ui-react'
import PostItem from './PostItem'

function UserList({posts}) {
    
    return (
        <div>
             <Header as='h2' icon textAlign='center' >
                <Icon size="tiny" name='list' circular />
                <Header.Content>Lista de postări</Header.Content>
            </Header>
            <List  verticalAlign='middle' style={{padding: 50}}>
                {
                   posts && posts.map((post) => {
                            return <PostItem 
                                key={post.id}
                                titlu = {post.title}
                                descriere = {post.body}
                            />
                    })
                }
            </List>
        </div>
    );
}

export default UserList;