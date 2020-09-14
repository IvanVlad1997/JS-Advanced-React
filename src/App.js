import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import faker from 'faker'
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import PostList from './components/PostList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      textColor: '#000000',
      users: [],
      data: [],
      showUsers: false,
      showPosts: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 5);
        data.forEach(user => {
          user.isGoldClient = true;
          user.image = faker.image.avatar() ;
          user.salary =  this.getRndInteger(1000, 5000);
        });
        this.setState({users: data});
      })

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data = data.filter(post => post.id< 10)
        this.setState({posts: data})
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }
  changeTextColor(event) {
    this.setState({textColor: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  submitAddForm( name, email, isGoldClient, salary, image) {
  
  
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient, 
            salary,
            image
          }
        ]
      }
    });
  }

  handleClickUser (state) {
    this.setState(() => {
      return {showUsers: !state}
    } )
  }
  handleClickPost (prevState) {
    this.setState(() => {
      return {showPosts: !prevState}
    } )
  }
 
  render() {
 
  
    return(

      <Grid  stackable className="app" style={{background: this.state.background, color: this.state.textColor}}>
        <Grid.Row>
          <Header as='h1' icon textAlign='center' style ={{paddingTop :20}}>
                <Header.Content>Admin panel - Proiectul 1</Header.Content>
            </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column textAlign="center" width={this.state.showUsers ? 6 : 12}>
            <UserAddForm  submitAddForm={( name, email, isGoldClient, salary, image) => this.submitAddForm( name, email, isGoldClient, salary, image)}/>
          </Grid.Column>

          <Grid.Column width={6}>
             {  this.state.showUsers
                    ?  <UserList  users={this.state.users}/>
                    :  null
             }

              
          </Grid.Column>    
        </Grid.Row>


      { 
      this.state.showPosts 
      ?   <Grid.Row  style ={{ paddingTop:100}}>   
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column widescreen={12}  >
                <PostList  posts = {this.state.posts}/>
            </Grid.Column>
          </Grid.Row>
      : null
     }



        <Grid.Row centered style ={{ paddingTop:100}}>
          <Grid.Column>
           <Header as='h2' icon textAlign='center' >
                <Header.Content>Setări pagină</Header.Content>
            </Header>
          </Grid.Column>
         </Grid.Row>

        
        <Grid.Row style={{padding:10}} centered>
            <Button color ="red" onClick = {() => this.handleClickUser(this.state.showUsers)}>Afișează useri</Button>
        </Grid.Row>
        <Grid.Row style={{padding:10}} centered>
            <Button color ="blue" onClick = {() => this.handleClickPost(this.state.showPosts)}>Afișează postări</Button>
        </Grid.Row>
        
        <Grid.Row centered >
            <Form  className="user-add-form">
              <Form.Field>
               <label >Culoare background</label>
               <input type="color" onChange={(event) => this.changeColor(event)}/>
              </Form.Field>
              <Form.Field>
               <label >Culoare text informații utilizatori</label>
               <input type="color" onChange={(event) => this.changeTextColor(event)}/>
              </Form.Field>
            </Form>

             
         </Grid.Row>

          
          
          
            
          
        
        
        
      </Grid>
    );
  }
}

export default App;
