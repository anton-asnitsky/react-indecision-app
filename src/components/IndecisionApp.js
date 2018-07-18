import React        from 'react';
import AddOption    from './AddOption';
import Options      from './Options';
import Header       from './Header';
import Action       from './Action';

export default class IndecisionApp extends React.Component{
    state = {
        options: []
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({options : []}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option    = this.state.options[randomNum];

        alert(option);
    };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add new item.';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists.'; 
        }

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    };

    componentDidMount(){
        const json  = localStorage.getItem('options');
        let options = [];

        if(json !== null){
            try{
                options = JSON.parse(json);
                this.setState(() => ({ options: options}));
            } catch (ex){}
        }
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };
    componentWillUnmount(){
        console.log('IndecisionApp will be unmounted');
    };
        
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    };
};