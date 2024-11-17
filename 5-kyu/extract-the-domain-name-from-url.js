// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let link = url.split('//')
    if(link[1]){
        let result = link[1].split('.')
        return result[0] == 'www' ? result[1] : result[0]
    }else{
        let result = link[0].split('.')
        return result[0] == 'www' ? result[1] : result[0]
    }    
}

console.log(domainName('zombie-bites.com'))





// other solutions
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};