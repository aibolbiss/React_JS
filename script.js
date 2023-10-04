const App = ({ text, name }) => {
  const [buttonText, setButtonText] = React.useState(text);
  const [classesList, setClassesList] = React.useState(name);

  const onButtonText = () => {
    setButtonText('New Click me');
    setClassesList('green-btn');
  };

  return (
    <div className='app'>
      <button
        className={classesList}
        onClick={onButtonText}
      >
        {buttonText}
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App
    text='Click me'
    name=''
  />
);
