class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    let random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  }


  //Never change state and prevstate directly. Always manipulate state in the return block;
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your hands in the life of a computer';
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
        />
        <AddOptions
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

//Pass functions in as props if we want to reverse one way data flow

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>

    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
         </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {console.log(this.props.options)}
        {this.props.options.map((option) => <Option key={option} optionsText={option} />)}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionsText}
      </div>
    )
  }
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }

  }
  handleAddOption(event) {
    event.preventDefault();
    const option = event.target.elements.optionToAdd.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=>{
      return {error};
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" placeholder="Add Options" name="optionToAdd" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));