import './App.css';
import Header from './components/header/main/header';
import Note from './components/body/notes/note';
import NoteForm from './components/body/note_form/note_form';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ARTICLE, ADD_ARCHIVE } from './store/store';
import Weather from './components/header/low/weather';


function App() {

  const articles = useSelector(state => state.articles);
  const archives = useSelector(state => state.archives);
  const dispatch = useDispatch();

  const handleAddArticle = (newArticle) => {
    dispatch({ type: ADD_ARTICLE, payload: newArticle });
  };

  const handleAddArchive = (newArchive) => {
    dispatch({ type: ADD_ARCHIVE, payload: newArchive });
  }

  console.log(articles);
  console.log('in main');
  return (
    <div className="App">
      
        {
      <div>
      <Header title={"Moscow News"} />
          <div>
            <Weather apiUrl="https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=55.7558&lon=37.6173" refreshInterval={10000} />
          </div>
      <div className="main-wrap">
        <div className="left-panel">
          <Note articles={articles} addArchive={handleAddArchive} archives={archives}/>
        </div>
        <div className="right-panel">
              <NoteForm addArticle={handleAddArticle} archives={archives} refreshInterval={30000}/>
        </div>
      </div>
      </div>
      }
    </div>
  );
}

export default App;
