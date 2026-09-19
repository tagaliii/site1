function forced() {
    document.getElementById("hobson").remove()

    const heading = document.createElement("h1");
    const anchor = document.createElement("a");
    
    const image = new Image(500, 500)
    image.src = "images/connectedcogtest.png"
    
    const headingText = document.createTextNode("website");
    const anchorText = document.createTextNode("infection");
    
    heading.appendChild(headingText);
    anchor.appendChild(anchorText);
    
    document.title = "website";
    anchor.href = "infection/infection.html"

    document.body.appendChild(heading);
    document.body.appendChild(image);       
    document.body.appendChild(anchor);
    document.body.appendChild(anchor);
    

    var audio = new Audio('website.wav');
    audio.play();
    audio.loop = true;
}