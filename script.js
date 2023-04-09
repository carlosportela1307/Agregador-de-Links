function toggleMode(){
    const html = document.documentElement

    // if(html.classList.contains("light")){
    //     html.classList.remove("light")
    // }
    // else{
    //     html.classList.add("light")
    // }

    // A instrução abaixo executa a mesma funcionalidade da condicional acima, usando uma função pronta do proprio JS
    html.classList.toggle("light")

    //Mudando a imagem em função da classe "light"

    //pegar a tag img e guardar da variável img
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        //caso esteja em light mode, adicione a imagem avatar-light.jpg
        img.setAttribute("src","./assets/avatar-light.jpg")
        //caso esteja em light mode, adicione o alt "avatar com óculos"
        img.setAttribute("alt","Avatar com óculos")
    }
    else{
        //caso esteja em dark mode, adicione a imagem avatar.jpg
        img.setAttribute("src","./assets/avatar.jpg")
        //caso esteja em dark mode, adicione o alt "avatar sem óculos"
        img.setAttribute("alt","Avatar sem óculos")
    }
}