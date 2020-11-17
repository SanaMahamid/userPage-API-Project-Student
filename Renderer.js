
class Renderer {
    renderMainUser(mainUser){
        const source = $('#user-template').html()
        const template = Handlebars.compile(source) 
        const newHtml = template(mainUser)
        $('.user-container').append(newHtml)
    }

    renderQuote(quote){
        const source = $('#quote-template').html()
        const template = Handlebars.compile(source) 
        const newHtml = template(quote)
        $('.quote-container').append(newHtml)
    }

    renderPokemon(pokemon){
        const source = $('#pokemon-template').html()
        const template = Handlebars.compile(source) 
        const newHtml = template(pokemon)
        $('.pokemon-container').append(newHtml)
    }

    renderAboutMe(aboutMe){
        const source = $('#meat-template').html()
        const template = Handlebars.compile(source) 
        const newHtml = template(aboutMe)
        $('.meat-container').append(newHtml)
    }

    renderFriends(friends){
        const source = $('#friends-template').html()
        const template = Handlebars.compile(source) 
        const newHtml = template(friends)
        $('.friends-container').append(newHtml)
    }

    renderAll(data){
        this.renderMainUser(data.mainUser)
        this.renderQuote(data.quote)
        this.renderPokemon(data.pokemon)
        this.renderAboutMe(data.aboutMe)
        this.renderFriends(data.friends)
    }
}