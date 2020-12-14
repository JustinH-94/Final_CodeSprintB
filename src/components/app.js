import { auth } from "firebase";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ArticlePage from "../img/ArticlePage";
import AccountPage from "../pages/account-page";
import CollectionPage from "../pages/CollectionPage";
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
import UserDataListings from "./user-dataListings";

function AuthenticatedRoute(props){
  const {isAuthenticated, children , ...routeProps} =props;
  return <Route {...routeProps}>
    {isAuthenticated? children: <Redirect to="/account"/>}
  </Route>
}

function App() {
  const [user,setUser] = useState(null);
  const isAuthenticated = user !== null;

  useEffect(()=>{ 
    const unsubscribe = auth().onAuthStateChanged((currentUser)=>{
      setUser(currentUser);
    });
    return unsubscribe;
  },[]);
  return (
    <BrowserRouter>
      <Nav user={user}/>

      <Switch>
        <Route path="/account">
          <AccountPage user={user}/>
        </Route>
        
        <AuthenticatedRoute path="/" exact isAuthenticated={isAuthenticated}>
          <CollectionPage user={user}/>
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/userdatalist" exact isAuthenticated={isAuthenticated}>
          <UserDataListings user={user}/>
        </AuthenticatedRoute>
        

        <AuthenticatedRoute path="/add" isAuthenticated={isAuthenticated}>
          <AddForm user={user}/>
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/review" isAuthenticated={isAuthenticated}>
          <ReviewListing user={user}/>
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/news" isAuthenticated={isAuthenticated}>
          <NewsListing user={user}/>
        </AuthenticatedRoute>
          
        <AuthenticatedRoute path="/edit/:type/:id" isAuthenticated={isAuthenticated}>
          <EditDocPage user={user}/>
        </AuthenticatedRoute>
      
        <AuthenticatedRoute path="/:type/:id" isAuthenticated={isAuthenticated}>
          <ArticlePage user={user}/>
        </AuthenticatedRoute>

        
        <AuthenticatedRoute path="*">
          <PageNonexistant/>
        </AuthenticatedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
