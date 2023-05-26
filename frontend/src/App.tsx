import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});


	useEffect(() => {
		setAppState({ loading: true, posts: null });
		const apiUrl = `http://127.0.0.1/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
        console.log(appState)
			});
	}, [setAppState]);

  return (
    <h1>Check Logs</h1>
  );
}

export default App;
