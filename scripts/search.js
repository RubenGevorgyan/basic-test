class search {

    getData(url) {
        return fetch(url)
            .then(response => {
                return response.json()
            }
            );
    }

    async forConstruction() {
        const categories = await this.getData("https://api.chucknorris.io/jokes/categories");
        this.categories = categories;
    }
    
    urlGenerator() {
        this.body = document.getElementById("body")
        this.html = '<form class="example" action="/#/search/something" style="margin:auto;max-width:300px"><input type="text" placeholder="Search.." name="search2"><button type="submit"><i class="fa fa-search"></i></button></form>"'
        return this.html
    }
}