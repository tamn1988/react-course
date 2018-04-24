//JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();     //stop full page refresh

    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderList();
    }
}

const onRemoveClick = () => {
    app.options.length = 0;
    renderList();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    
}

const renderList = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveClick}>Remove All</button>
            <ol>
                {
                    app.options.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}



const appRoot = document.querySelector('#app');

renderList();




//Arrow Functions
// X in parenthesis is the argument
// const squareArrow = (x) => {
//    return x * x
//}
//const getFirstNameTwo = (x) => x.split(" ")[0];

// Everything in between parenthesis is arguments, can have multiple arguments 
// everything after the arrow is the return expression

// Arrow function this statements are bound to the parent scope. If the this statement
// is inside a method, the this statement will go into the global scope and this will
//be undefined. A nested function inside a method this statement will point
// toward the object

