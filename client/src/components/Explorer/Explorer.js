import React, { Component } from 'react';
import { Grid, Button, Card } from 'semantic-ui-react';
import ExplorerRequest from './ExplorerRequest';
import ExplorerQuery from './ExplorerQuery';
import ExplorerResponse from './ExplorerResponse';
import ExplorerParams from './ExplorerParams';

export default class Explorer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: false,
            url: '',
            method: 'GET',
            query: {},
            params: [],
            response: ''
        };

        this.queryUpdate = this.queryUpdate.bind(this);
        this.getCode = this.getCode.bind(this);
        this.runInPostman = this.runInPostman.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.handleURL = this.handleURL.bind(this);
    }

    componentDidMount() {

    }

    handleURL(URL){
        this.setState({url: URL});
    }

    handleResponse(receivedRes){
        this.setState({response: receivedRes});
    }

    queryUpdate(updatedQuery) {
        this.setState({query: updatedQuery});
    }

    updateParams(updatedParams){
        this.setState({params: updatedParams});
    }

    getCode() {

    }

    runInPostman() {

    }

    render() {
        return (
                <div>

                    <Grid centered textAlign="left">
                        <Grid.Row columns={1}>
                            <ExplorerRequest
                                key={this.state.key}
                                handleURL={this.handleURL}
                                method={this.state.method}
                                handleResponse = {this.handleResponse}
                                query = {this.state.query}
                            />
                        </Grid.Row>

                        <Grid.Row columns={3}>

                            <Grid.Column width={4}>
                                <ExplorerParams
                                    key={this.state.key}
                                    params={this.updateParams}
                                    query = {this.state.query}
                                    queryUpdate = {this.queryUpdate}
                                />
                            </Grid.Column>

                            <Grid.Column width={7}>
                                <ExplorerQuery
                                    key={this.state.key}
                                    params = {this.state.params}
                                    queryUpdate ={this.queryUpdate}
                                    url = {this.state.url}
                                />
                            </Grid.Column>                            
                            <Grid.Column width={5}>
                                <ExplorerResponse
                                    key={this.state.key}
                                    response={this.state.response}
                                />
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>

                    <br />

                    <div style={styles.div}>
                        <Button
                            content='</> Get Code'
                            style={styles.button}
                            onClick={this.getCode}
                        />

                        <Button
                            content='Run in Postman'
                            style={styles.button}
                            onClick={this.runInPostman}
                        />
                    </div>
                </div>
        );
    }
}

const styles = {
    button: {
        backgroundColor: '#2980b9',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px'
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
};