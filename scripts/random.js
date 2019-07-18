class jokes{
    categories;
    constructor(){
        this.categories=this.getData('https://api.chucknorris.io/jokes/categories')

    }
    async getData (url) 
          {
            let response = await fetch(url);
            let data = await response.json()
            return data;
          }
     getJoke(category) {
        joke= this.getData("https://api.chucknorris.io/jokes/random?category={category}"+category)
        return joke.value
    }

    urlGenerator(){
        body = document.getElementById("body")
        
    }
}
export default jokes