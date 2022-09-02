function NavBar() {
    return(
        <div>
            <h1>Hi My name is Shein Min Htet</h1>
            <p>I'm trying to learn react</p>
        </div>
    )
};



const root = document.querySelector('#root');

ReactDOM.render(
    <div>
        <NavBar />
    </div>,
    root
);