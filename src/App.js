import './App.css';
import React, { useEffect, useState } from "react";
import Results from './results'
import Search from './search'
import Navbar from './Navbar'
import Contact from './Contact.jsx'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


function App() {
  const [results, setresults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [score, setScore] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    fetch("https://public.connectnow.org.uk/applicant-test/")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setresults(res);
        setfiltered(res)
      });
  }, []);

  useEffect(() => {
    setfiltered(results.filter(result => result.name.toLowerCase().includes(search.toLowerCase())))
  }, [search]);// eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setfiltered(filtered.filter(result => result.rating>=(score*10)))

  }, [score]);// eslint-disable-line react-hooks/exhaustive-deps
  
  const searchHandler = (e) =>{
    setSearch(e.target.value)
    
  }
  const scoreHandler = (e) =>{
    setScore(e.target.value)
  }
  const clear = () =>{
    setSearch('')
    setScore('')
    setSort('')
    setfiltered(results)
  }

  const sortHandler = (e) =>{
    setSort(e.target.textContent)
    switch (e.target.textContent) {
      case 'Name':
        const data = filtered.sort((a, b) => a.name > b.name ? 1 : -1)
        setfiltered(data)
        break;
      case 'Score':
        setfiltered(filtered.sort((a, b) => a.rating > b.rating ? 1 : -1))
        break;
      case 'Release Date':
        setfiltered(filtered.sort((a, b) => a.first_release_date > b.first_release_date ? 1 : -1))
        break;
      default:
        setfiltered(filtered)
        break;
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" render={()=> 
      <div className='main'>
        <Grid container spacing={2} >
            <Grid item xs={12} lg={3}>
              <Search search={search} searchHandler={searchHandler} score={score} scoreHandler={scoreHandler} clear={clear} sort={sort} sortHandler={sortHandler}/>
            </Grid>
            <Grid item xs={12} lg={9}>
              {loading? <p>Loading ...</p>:
              <Results filtered={filtered}/>
               }
            </Grid>
        </Grid>
      </div>
      } />
      <Route path="/contact" component={Contact} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
