import React, {useState, useEffect} from "react";
import List from './List';
import withListLoading from './WithListLoading';

function Test(props){
    
    // alert("TEST");
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    // fetch('http"://localhost:5000/api/user')
    //   .then(res=>res.json())
    //   .then(data=>{
    //     setAppState({loading:false, repos:"data"});
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        //   console.log(repos);
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );


    // return(
    //     <div>
    //         <h1>TEST USER</h1>
    //         <h1>{props.title}</h1>
    //         <h1>{props.name}</h1>
    //     </div>
    // );
}

export default Test;