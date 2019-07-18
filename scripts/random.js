class jokes{
    categories;
    getData (url) 
          {
             return fetch(url)
            .then(response => {
              return  response.json()}
            );
          }

        async forConstruction(){
             const categories = await this.getData("https://api.chucknorris.io/jokes/categories");
             this.categories = categories;
        }

     getJoke(event) {
        joke= this.getData("https://api.chucknorris.io/jokes/random?category="+event.target.value)
        this.html= joke.value
        document.getElementById("body")=this.html
    }

    urlGenerator(){
        this.body = document.getElementById("body")
        this.html = '<select id="selectElement">'
        this.categories.forEach(category => {
            this.html=this.html+' <option value='+category+'>'+category+'</option>'
            
        });
        this.html=this.html+'</select>'
        return this.html
    }
}
export default jokes