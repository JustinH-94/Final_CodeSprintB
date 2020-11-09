import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddForm from "./addForm";
import ContentPage from "./content_page";
import DataListing from "./dataListing";
// import AddMoviePage from "../pages/add-movie-page";
// import EditMoviePage from "../pages/edit-movie-page";
// import MoviesPage from "../pages/movies-page";
// import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <DataListing/>
        </Route>

        <Route path="/add">
          <AddForm/>
        </Route>

        <Route path="/:type/:id">
          <ContentPage/>
        </Route>

        <Route path="*">

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
