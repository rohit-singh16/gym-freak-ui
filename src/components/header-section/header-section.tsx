import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'header-section',
  styleUrl: 'header-section.css',
  shadow: true,
})
export class HeaderSection {
  @State() user = sessionStorage.getItem("user");
  anchor:HTMLAnchorElement;
  userName:string;
  logs:string;
  
  logout(){
    if(this.user){
    sessionStorage.clear();
    this.user=null;
    window.location.href="/login-section";

    }else{ 
    window.location.href="/login-section"
    }
  }
  render() {
    
    if(this.user){
        this.userName = this.user;
        this.logs="Logout";
    }else{
      this.userName = "Sign-In";
      this.logs="Login";
    }
    return (
      <header>
        <a href="/home">
          
          <div class="logo">
            Gym-Freaks<div class="bicep"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#FFD43B" d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg>
            </div></div>
        </a>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/benefits">Benefits</a></li>
            <li><a href="/sports">Sports</a></li>
            
            <li><a href="/sign-in-section">{this.userName}</a></li>
            <li><a href="/login-page" onClick={this.logout.bind(this)}>{this.logs}</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
