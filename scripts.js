function test() {
    document.getElementById("hobson").remove()

    const heading = document.createElement("h1");
    const image = new Image(500, 500)

    const headingText = document.createTextNode("website");

    
    heading.appendChild(headingText);
    
    document.body.appendChild(heading);
    document.body.appendChild(image);       
    document.title = "website";
    image.src = "images/connectedcog.png"

    var audio = new Audio('website.wav');
    audio.play();
    audio.loop = true;
}