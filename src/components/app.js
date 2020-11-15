import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ArticlePage from "../img/ArticlePage";
import EditDocPage from "../pages/EditDocPage";
import PageNonexistant from "../pages/pagenonexistant";
import AddForm from "./addForm";
import DataListing from "./dataListing";
// import AddMoviePage from "../pages/add-movie-page";
// import EditMoviePage from "../pages/edit-movie-page";
// import MoviesPage from "../pages/movies-page";
// import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";
import NewsListing from "./news";
import ReviewListing from "./reviewListing";

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

        <Route path="/review">
          <ReviewListing/>
        </Route>

        <Route path="/news">
          <NewsListing/>
        </Route>
        <Route path="/edit/:type/:id">
          <EditDocPage/>
        </Route>
        <Route path="/:type/:id">
          <ArticlePage/>
        </Route>

        

        <Route path="*">
          <PageNonexistant/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
