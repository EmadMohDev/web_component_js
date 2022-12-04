/*
What is web Components
Custom elements
Customized built-in elements
Shadow DOM / Shadow DOM Styles / Shadow DOM Events
HTML templates / Slots
Card Component Example 


*/


class MyComponent extends HTMLElement {

    constructor(){
        super();  // we should add super() here 
       console.log('test')
    }


    // work when component appear on html Dom
    connectedCallback(){
        console.log("connected")
          this.render();

       }

       render(){
         // slot :  is a placehoder on component and take name   and after that you can put on this place any content by just call slot="name"
       this.attachShadow({mode: 'open'})
       
       let template = document.createElement('template') ;
       template.innerHTML= `
       <style>
       .card {
         background: #CCC ;
         width: 300px ;
         height: 200px;
         padding: 10px;
         margin: 20px;
       }
     </style>
   
     <div class="card">
       <slot name="heading" class="heading"></slot>
       <slot name="content"></slot>
       <button>Read More</button>
     </div>
       `

      //  let template = document.querySelector("#my-template")

       this.shadowRoot.appendChild(template.content.cloneNode(true))



        // check if component has attributes
        if(this.hasAttribute("heading-color")){
          this.shadowRoot.querySelector(".heading").style.color = this.getAttribute("heading-color");
        }

        if(this.hasAttribute("bg-color")){
          this.shadowRoot.querySelector(".card").style.backgroundColor = this.getAttribute("bg-color");
        }


       }

     // work when component disappear from html Dom
    disconnectedCallback(){
        console.log("disconnected")
       }


}


customElements.define("my-component",MyComponent);  // to define my-component on html
// the first name can be any name like  my-component  or  emad-mohamed  






