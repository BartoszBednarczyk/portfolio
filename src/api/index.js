const url = "https://raw.githubusercontent.com/BartoszBednarczyk/portfolio-api/master/data.json"

const getData = async () => {
    const data = await fetch(url).then(response => response.json()).catch(error => console.log(error))
    await console.log(data)
    return data
}

export default getData