import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
    id = 2 // const, let이 안먹히는 이유
    constructor(props) {
        super(props);
        this.state = {
            information : [
                {
                    id: 0,
                    name: '김진태',
                    phone: "010-0000-0000"
                },
                {
                    id: 1,
                    name: "홍길동",
                    phone: "010-0000-0001"
                }
            ]
        };
    }

    handleCreate = data => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data})
        })
    }
    render() {
        const { information } = this.state;
        return(
            <div>
                <PhoneForm 
                    onCreate={this.handleCreate}
                />
                {JSON.stringify(information)}
            </div>
            
        );
    }
};


export default App;