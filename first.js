async function translateText() {

    let text =
    document.getElementById("inputText").value;

    let response = await fetch(
    "https://libretranslate.de/translate",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            q:text,
            source:"en",
            target:"hi",
            format:"text"
        })
    });

    let data = await response.json();

    document.getElementById("result")
    .innerText = data.translatedText;
}