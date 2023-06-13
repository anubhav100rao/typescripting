
async function solve(url) {
    console.log("solve called")
    const [facebook, google] = await Promise.all([fetch(url), fetch("https://www.google.com")]);
    console.log("facebook and google called");
    console.log(facebook);
    console.log(google);
    return url;
}

const webUrls = [
    'https://www.facebook.com',
    'https://www.google.com',
    'https://www.twitter.com',
    'https://www.github.com'
]

console.log(solve(webUrls[0])); //  promise pending