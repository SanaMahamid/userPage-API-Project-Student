//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    getUsers(){
        const mainUser = {}
        const friends = {friends: []}
        $.get("https://randomuser.me/api/?results=7", function(result){
            let users = result.results
            mainUser.firstName = users[0].name.first
            mainUser.lastName = users[0].name.last
            mainUser.picture = users[0].picture.large
            mainUser.city = users[0].location.city
            mainUser.state = users[0].location.state
            users.splice(0,1)
            for(let user of users){
                friends.friends.push({firstName: user.name.first, lastName: user.name.last})
            }
        })
        this.data.mainUser = mainUser
        this.data.friends = friends
    }

    getKanyeQuote(){
        const quote = {}
        $.get("https://api.kanye.rest", function(result){
            quote.text = result.quote
        })
        this.data.quote = quote
    }

    
    getPokemon(){
        const pokemon = {}
        const id = Math.floor(Math.random() * 948) + 1
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
            success: function(result){
                pokemon.name = result.name
                pokemon.image = result.sprites.back_default
            }
        })
        this.data.pokemon = pokemon
    }

    getAboutMe(){
        const aboutMe = {}
        $.get('https://baconipsum.com/api/?callback=?', 
        { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'3' }, function(result){
            aboutMe.text = result[0]
        })
        this.data.aboutMe = aboutMe 
    }

    getData(){
        this.getUsers()
        this.getKanyeQuote()
        this.getPokemon()
        this.getAboutMe()
    }


}
