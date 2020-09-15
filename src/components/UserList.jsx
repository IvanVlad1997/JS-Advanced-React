import React from 'react';
import UserItem from './UserItem';
import { List, Header, Icon } from 'semantic-ui-react'

function UserList(props) {
    const { users, color } = props;

    return (
        <div>
             <Header as='h2' icon textAlign='center' >
                <Icon size="tiny" name='users' circular />
                <Header.Content>Lista utilizatorilor</Header.Content>
            </Header>
            <List   divided verticalAlign='middle' style={{padding: 50, color : color}}>
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    salary = {user.salary}
                    image = {user.image}
                    key={ index }
                />
            })}
             </List>
        </div>
    );
}

export default UserList;