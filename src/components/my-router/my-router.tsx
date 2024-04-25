import { Component, h } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';

const Router = createRouter();

@Component({
  tag: 'my-router',
})
export class MyRouter {

  render() {
    return (
      <div>
       
        <Router.Switch>
        <Route path="/login-page">
        <header-section/>
          <login-section/>
          <subscription-section></subscription-section>
        <footer-section></footer-section></Route>
          <Route path="/app-navbar"><app-navbar/></Route>
          <Route path="/sign-in-section"><sign-in-section/></Route>
          <Route path="/about"><about-section/></Route>
          <Route path="/benefits"><benefits-section/></Route>
          <Route path="/contact-container"><contact-section/></Route>
          <Route path="/footer"><footer-section/></Route>
          <Route path="/hero"><hero-section/></Route>
          <Route path="/home"><home-page/></Route>
          <Route path="/sports"><sports-section/></Route>
          {/* <Route path="/header"><header-section/></Route> */}
          <Route path="/join-us"><join-us-section/></Route>
          <Route path="/subscription"><subscription-section/></Route>
          <Route path="/admin-login"><admin-login/></Route>
          <Route path="/admin-dashboard"><admin-dashboard/></Route>
          
        </Router.Switch>
      </div>
    );
  }
}
